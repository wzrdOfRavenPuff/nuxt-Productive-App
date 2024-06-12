<template>
  <h1>
    <Icon name="arcticons:rocketbook" class="pr-2 black" size="100px" />
    Rocketbook
  </h1>
  <div>
    <InputCheckBox
      :id="'checkbox-showSettings'"
      v-model="showSettings"
      label="show settings json"
    ></InputCheckBox>
  </div>
  <div v-for="account in list">
    <h2>
      {{ account.account }}
    </h2>
    <div v-for="icon in account.icons">
      <Icon :name="icon.icon" class="pr-2 black" size="40px" />
      <select v-model="icon.syncedWith">
        <option v-for="option in possiblySyncs" :value="option.value">
          {{ option.name }}
        </option>
      </select>
      <div v-if="icon.syncedWith">
        <template
          v-for="setting in settings"
          :key="icon.name + '_' + setting.name"
        >
          <div v-if="CheckIfContainsThis(setting.available, icon.syncedWith)">
            <div v-if="setting.type == 'string'">
              <label class="mr-2">{{ setting.label }}</label>
              <input
                :id="'textField-' + icon.name + '-' + setting.name"
                v-model="icon.settings[setting.name]"
                label="setting.label"
                class="bg-red-200 rounded px-2"
              />
            </div>
            <div v-if="setting.type == 'boolean'">
              <InputCheckBox
                :id="'checkbox-' + icon.name + '-' + setting.name"
                v-model="icon.settings[setting.name]"
                :label="setting.label"
              ></InputCheckBox>
            </div>
            <div v-if="setting.type == 'select'">
              <label class="mr-2">{{ setting.label }}</label>
              <select
                :id="'select-' + icon.name + '-' + setting.name"
                v-model="icon.settings[setting.name]"
                :label="setting.label"
                class="rounded px-3 py-2"
              >
                <template v-for="option in setting.possibilities">
                  <option
                    :value="option"
                    v-if="
                      CheckIfContainsThis(option.available, icon.syncedWith)
                    "
                  >
                    {{ option.name }}
                  </option>
                </template>
              </select>
            </div>
            <div
              v-if="
                icon.settings[setting.name] != undefined &&
                icon.settings[setting.name].possibilities != undefined
              "
            >
              <template
                v-for="possibility in icon.settings[setting.name].possibilities"
              >
                <div
                  v-if="
                    CheckIfContainsThis(possibility.available, icon.syncedWith)
                  "
                  class="ml-6"
                >
                  <InputCheckBox
                    :id="
                      'checkbox-' +
                      icon.name +
                      '-' +
                      setting.name +
                      '-' +
                      possibility.name
                    "
                    v-model="
                      icon.settings[setting.name + '-' + possibility.name]
                    "
                    :label="possibility.label ?? possibility.name"
                  ></InputCheckBox>
                </div>
              </template>
            </div>
            <div
              v-if="
                icon.settings[setting.name] != undefined &&
                icon.settings[setting.name] == true &&
                setting.possibilities != undefined
              "
            >
              <template v-for="possibility in setting.possibilities">
                <div
                  v-if="
                    CheckIfContainsThis(possibility.available, icon.syncedWith)
                  "
                  class="ml-6"
                >
                  <InputCheckBox
                    :id="
                      'checkbox-' +
                      icon.name +
                      '-' +
                      setting.name +
                      '-' +
                      possibility.name
                    "
                    v-model="
                      icon.settings[setting.name + '-' + possibility.name]
                    "
                    :label="possibility.label ?? possibility.name"
                  ></InputCheckBox>
                </div>
              </template>
            </div>
          </div>
        </template>
        <div v-if="showSettings">
          {{ icon.settings }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const selected = ref(undefined);
const showSettings = ref(false);
const possiblySyncs = ref([
  {
    value: "GoogleDrive",
    name: "Google Drive",
    extras: ["account", "folder"],
  },
  {
    value: "Evernote",
    name: "Evernote",
  },
  {
    value: "Dropbox",
    name: "Dropbox",
  },
  {
    value: "OneNote",
    name: "OneNote",
  },
  {
    value: "Trello",
    name: "Trello",
  },
  {
    value: "Slack",
    name: "Slack",
  },
  {
    value: "Box",
    name: "Box",
  },
  {
    value: "Photos",
    name: "Photos",
    extras: ["folder"],
  },
  {
    value: "email",
    name: "email",
    extras: ["email"],
    //email: [undefined, undefined, undefined, undefined, undefined],
  },
  {
    value: "asana",
    name: "asana",
  },
  {
    value: "todoist",
    name: "todoist",
  },
  {
    value: "nextcloud",
    name: "nextcloud",
  },
]);

const settings = ref([
  {
    name: "account",
    label: "Account",
    info: undefined,
    type: "string",
    available: ["GoogleDrive"],
  },
  {
    name: "folder",
    label: "Folder",
    info: undefined,
    type: "string",
    available: ["Photos", "GoogleDrive"],
  },
  {
    name: "email",
    label: "Email",
    info: "Emails to send to (max 5)",
    type: "string",
    available: ["email"],
  },
  {
    name: "fileType",
    label: "File Type",
    type: "select",
    available: ["email", "Photos", "GoogleDrive"],
    possibilities: [
      { name: "jpg", available: ["Photos"] },
      { name: "gif", available: ["Photos"] },
      {
        name: "pdf",
        available: ["email", "GoogleDrive"],
        possibilities: [
          {
            name: "bundleScans",
            label: "Bundle Scans",
            info: "Group scans as a combined PDF.",
            type: "boolean",
            available: ["email", "GoogleDrive"],
          },
        ],
      },
    ],
  },
  {
    name: "autoSend",
    label: "Auto-Send",
    info: "Skip the manual approval process",
    type: "boolean",
    default: false,
    available: ["email", "Photos", "GoogleDrive"],
  },
  {
    name: "ocrTranscription",
    label: "OCR Transcription",
    info: "Turn handwriting into transcribed text.",
    type: "boolean",
    available: ["email", "GoogleDrive"],
    possibilities: [
      {
        name: "Attach",
        info: "Attach as a .TXT file at the end of your email (default)",
        available: ["email"],
      },
      {
        name: "Embed",
        info: "Embed text within the body of your email",
        available: ["email"],
      },
      {
        name: "SendAsOneFile",
        label: "Send as one file",
        info: "Attach your JPG with your transcribed text.",
        available: ["GoogleDrive"],
      },
      {
        name: "SendAsTwoFiles",
        label: "Send as two files",
        info: "Send one file with your PDF and one with text.",
        available: ["GoogleDrive"],
      },
    ],
  },
  {
    name: "sendSmartTag",
    label: "Send Smart Tag",
    info: "Include Smart Tag in Filename",
    type: "boolean",
    available: ["email", "Photos", "GoogleDrive"],
  },
  {
    name: "sendSmartTagSubjectLine",
    label: "Smart Tag Subject Line",
    info: "Include Smart Tag in Subject Line",
    type: "boolean",
    available: ["email"],
  },
]);
const list = ref([
  {
    account: "senne@strubbe.com",
    icons: [
      {
        name: "rocketbook",
        icon: "arcticons:rocketbook",
        syncedWith: "email",
        settings: {
          email: "senne@strubbe.com",
          fileType: {
            name: "pdf",
            available: ["email", "GoogleDrive"],
            possibilities: [
              {
                name: "bundleScans",
                label: "Bundle Scans",
                info: "Group scans as a combined PDF.",
                type: "boolean",
                available: ["email", "GoogleDrive"],
              },
            ],
          },
          "fileType-bundleScans": true,
          sendSmartTag: true,
          sendSmartTagSubjectLine: true,
        },
      },
      {
        name: "diamond",
        icon: "material-symbols:diamond-outline",
        syncedWith: "Photos",
        settings: {
          folder: "RocketbookDiamond",
          fileType: { name: "jpg", available: ["Photos"] },
          sendSmartTag: true,
        },
      },
      {
        name: "apple",
        icon: "carbon:apple",
        syncedWith: "email",
        settings: {
          email: "senne@strubbe.com",
          fileType: {
            name: "pdf",
            available: ["email", "GoogleDrive"],
            possibilities: [
              {
                name: "bundleScans",
                label: "Bundle Scans",
                info: "Group scans as a combined PDF.",
                type: "boolean",
                available: ["email", "GoogleDrive"],
              },
            ],
          },
          "fileType-bundleScans": true,
          ocrTranscription: true,
          "ocrTranscription-Attach": true,
          sendSmartTag: true,
          sendSmartTagSubjectLine: true,
        },
      },
      {
        name: "bell",
        icon: "material-symbols:notifications-outline-rounded",
        syncedWith: "email",
        settings: {
          email: "senne@strubbe.com",
          fileType: {
            name: "pdf",
            available: ["email", "GoogleDrive"],
            possibilities: [
              {
                name: "bundleScans",
                label: "Bundle Scans",
                info: "Group scans as a combined PDF.",
                type: "boolean",
                available: ["email", "GoogleDrive"],
              },
            ],
          },
          "fileType-bundleScans": true,
          sendSmartTag: true,
          sendSmartTagSubjectLine: true,
        },
      },
      {
        name: "clover",
        icon: "ph:clover",
        syncedWith: "email",
        settings: {
          email: "senne@strubbe.com",
          fileType: {
            name: "pdf",
            available: ["email", "GoogleDrive"],
            possibilities: [
              {
                name: "bundleScans",
                label: "Bundle Scans",
                info: "Group scans as a combined PDF.",
                type: "boolean",
                available: ["email", "GoogleDrive"],
              },
            ],
          },
          "fileType-bundleScans": true,
          sendSmartTag: true,
          sendSmartTagSubjectLine: true,
        },
      },
      {
        name: "star",
        icon: "material-symbols:kid-star-outline-sharp",
        syncedWith: "email",
        settings: {
          email: "senne@strubbe.com",
          fileType: {
            name: "pdf",
            available: ["email", "GoogleDrive"],
            possibilities: [
              {
                name: "bundleScans",
                label: "Bundle Scans",
                info: "Group scans as a combined PDF.",
                type: "boolean",
                available: ["email", "GoogleDrive"],
              },
            ],
          },
          "fileType-bundleScans": true,
          sendSmartTag: true,
          sendSmartTagSubjectLine: true,
        },
      },
      {
        name: "horseshoe",
        icon: "mdi:horseshoe",
        syncedWith: "GoogleDrive",
        settings: {
          account: "senne@strubbe.com",
          folder: "Main Folder/Notities",
          fileType: {
            name: "pdf",
            available: ["email", "GoogleDrive"],
            possibilities: [
              {
                name: "bundleScans",
                label: "Bundle Scans",
                info: "Group scans as a combined PDF.",
                type: "boolean",
                available: ["email", "GoogleDrive"],
              },
            ],
          },
          "fileType-bundleScans": true,
          ocrTranscription: true,
          "ocrTranscription-SendAsTwoFiles": true,
          sendSmartTag: true,
        },
      },
    ],
  },
  {
    account: "...",
    icons: [
      {
        name: "rocketbook",
        icon: "arcticons:rocketbook",
        syncedWith: undefined,
        settings: {},
      },
      {
        name: "diamond",
        icon: "material-symbols:diamond-outline",
        syncedWith: undefined,
        settings: {},
      },
      {
        name: "apple",
        icon: "carbon:apple",
        syncedWith: undefined,
        settings: {},
      },
      {
        name: "bell",
        icon: "material-symbols:notifications-outline-rounded",
        syncedWith: undefined,
        settings: {},
      },
      {
        name: "clover",
        icon: "ph:clover",
        syncedWith: undefined,
        settings: {},
      },
      {
        name: "star",
        icon: "material-symbols:kid-star-outline-sharp",
        syncedWith: undefined,
        settings: {},
      },
      {
        name: "horseshoe",
        icon: "mdi:horseshoe",
        syncedWith: undefined,
        settings: {},
      },
    ],
  },
]);

function CheckIfContainsThis(available, syncedWith) {
  if (available != undefined && available != null) {
    var isInList = available.filter((x) => x == syncedWith);
    if (isInList.length > 0) return true;
  }
  return false;
}
</script>
