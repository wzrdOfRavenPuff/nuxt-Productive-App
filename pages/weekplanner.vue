<script setup>

</script>

<template>
  <div class="mt-2 w-[0px] min-w-[100%] overflow-auto">
    <div class="vuecal__flex vuecal vuecal--week-view vuecal--en vuecal--view-with-time" column="" lang="en"
      style="height:800px;">
      <div class="vuecal__header">
        <div class="vuecal__flex vuecal__menu" role="tablist" aria-label="Calendar views navigation">
          <button class="vuecal__view-btn vuecal__view-btn--active" type="button" aria-label="Week view">
            Week
          </button>
          <button class="vuecal__view-btn" type="button" aria-label="Day view">
            Day
          </button>
        </div>
        <div class="vuecal__title-bar">
          <button class="vuecal__arrow vuecal__arrow--prev" type="button" aria-label="Previous week">
            &nbsp;<i class="angle"></i>&nbsp;
          </button>
          <div class="vuecal__flex vuecal__title" grow="">
            <span type="false" aria-label="false" class="">
              Week 47 (November 2022)
            </span>
          </div>
          <button class="vuecal__arrow vuecal__arrow--next" type="button" aria-label="Next week">
            &nbsp;<i class="angle"></i>&nbsp;
          </button>
        </div>
        <div class="vuecal__flex vuecal__weekdays-headings">
          <div class="vuecal__flex vuecal__heading clickable">
            <div class="vuecal__flex" column="">
              <div class="vuecal__flex weekday-label" grow="">
                <span class="full">Monday</span>
                <span class="small">Mon</span>
                <span class="xsmall">M</span>
                <span>&nbsp;21</span>
              </div>
            </div>
          </div>
          <div class="vuecal__flex vuecal__heading clickable">
            <div class="vuecal__flex" column="">
              <div class="vuecal__flex weekday-label" grow="">
                <span class="full">Tuesday</span>
                <span class="small">Tue</span>
                <span class="xsmall">T</span>
                <span>&nbsp;22</span>
              </div>
            </div>
          </div>
          <div class="vuecal__flex vuecal__heading clickable">
            <div class="vuecal__flex" column="">
              <div class="vuecal__flex weekday-label" grow="">
                <span class="full">Wednesday</span>
                <span class="small">Wed</span>
                <span class="xsmall">W</span>
                <span>&nbsp;23</span>
              </div>
            </div>
          </div>
          <div class="vuecal__flex vuecal__heading clickable">
            <div class="vuecal__flex" column="">
              <div class="vuecal__flex weekday-label" grow="">
                <span class="full">Thursday</span>
                <span class="small">Thu</span>
                <span class="xsmall">T</span>
                <span>&nbsp;24</span>
              </div>
            </div>
          </div>
          <div class="vuecal__flex vuecal__heading clickable">
            <div class="vuecal__flex" column="">
              <div class="vuecal__flex weekday-label" grow="">
                <span class="full">Friday</span>
                <span class="small">Fri</span>
                <span class="xsmall">F</span>
                <span>&nbsp;25</span>
              </div>
            </div>
          </div>
          <div class="vuecal__flex vuecal__heading clickable">
            <div class="vuecal__flex" column="">
              <div class="vuecal__flex weekday-label" grow="">
                <span class="full">Saturday</span>
                <span class="small">Sat</span>
                <span class="xsmall">S</span>
                <span>&nbsp;26</span>
              </div>
            </div>
          </div>
          <div class="vuecal__flex vuecal__heading clickable">
            <div class="vuecal__flex" column="">
              <div class="vuecal__flex weekday-label" grow="">
                <span class="full">Sunday</span>
                <span class="small">Sun</span>
                <span class="xsmall">S</span>
                <span>&nbsp;27</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div class="vuecal__flex vuecal__body" grow="">
        <div class="vuecal__flex" column="" style="min-width: 100%;"><!---->
          <div class="vuecal__bg" column="">
            <div class="vuecal__flex" row="" grow="">
              <div class="vuecal__time-column"><!---->
                <div class="vuecal__time-cell" style="height: 40px;">
                  <span class="vuecal__time-cell-line"></span>
                  <span class="vuecal__time-cell-label">09:00</span>
                </div>
                <div class="vuecal__time-cell" style="height: 40px;">
                  <span class="vuecal__time-cell-line"></span>
                  <span class="vuecal__time-cell-label">10:00</span></div>
                <div class="vuecal__time-cell" style="height: 40px;">
                  <span class="vuecal__time-cell-line"></span>
                  <span class="vuecal__time-cell-label">11:00</span></div>
                <div class="vuecal__time-cell" style="height: 40px;">
                  <span class="vuecal__time-cell-line"></span>
                  <span class="vuecal__time-cell-label">12:00</span></div>
                <div class="vuecal__time-cell" style="height: 40px;">
                  <span class="vuecal__time-cell-line"></span>
                  <span class="vuecal__time-cell-label">13:00</span></div>
                <div class="vuecal__time-cell" style="height: 40px;">
                  <span class="vuecal__time-cell-line"></span>
                  <span class="vuecal__time-cell-label">14:00</span></div>
                <div class="vuecal__time-cell" style="height: 40px;">
                  <span class="vuecal__time-cell-line"></span>
                  <span class="vuecal__time-cell-label">15:00</span></div>
                <div class="vuecal__time-cell" style="height: 40px;">
                  <span class="vuecal__time-cell-line"></span>
                  <span class="vuecal__time-cell-label">16:00</span></div>
                <div class="vuecal__time-cell" style="height: 40px;">
                  <span class="vuecal__time-cell-line"></span>
                  <span class="vuecal__time-cell-label">17:00</span></div>
                <div class="vuecal__time-cell" style="height: 40px;">
                  <span class="vuecal__time-cell-line"></span>
                  <span class="vuecal__time-cell-label">18:00</span></div>
                <div class="vuecal__time-cell" style="height: 40px;">
                  <span class="vuecal__time-cell-line"></span>
                  <span class="vuecal__time-cell-label">19:00</span></div>
                <div class="vuecal__time-cell" style="height: 40px;">
                  <span class="vuecal__time-cell-line"></span>
                  <span class="vuecal__time-cell-label">20:00</span></div>
                <div class="vuecal__time-cell" style="height: 40px;">
                  <span class="vuecal__time-cell-line"></span>
                  <span class="vuecal__time-cell-label">21:00</span></div>
                <div class="vuecal__time-cell" style="height: 40px;">
                  <span class="vuecal__time-cell-line"></span>
                  <span class="vuecal__time-cell-label">22:00</span>
                </div>
              </div>
              <div class="vuecal__flex vuecal__cells week-view" grow="" wrap="true" column="false">
                <div class="vuecal__flex" grow="" wrap="true" style="">
                  <div class="vuecal__cell vuecal__cell--has-events">
                    <div class="vuecal__flex vuecal__cell-content" data-split="false" column="" tabindex="0">
                      <div class="vuecal__cell-events">
                        <div class="vuecal__event leisure" tabindex="0" draggable="true"
                          style="top: 200px; height: 160px; width: 100%; left: 0%;">
                          <div class="vuecal__event-delete">Delete</div>
                          <div class="vuecal__event-title vuecal__event-title--edit" contenteditable="plaintext-only">
                            Need to go shopping
                          </div>
                          <div class="vuecal__event-time">14:00<span>&nbsp;- 18:00</span><!----></div>
                          <div class="vuecal__event-content"><i class="fa-solid fa-cart-shopping"></i></div>
                          <div class="vuecal__event-resize-handle" contenteditable="false"></div>
                        </div>
                        <div class="vuecal__event sport" tabindex="0" draggable="true"
                          style="top: 400px; height: 40px; width: 100%; left: 0%;">
                          <div class="vuecal__event-delete">Delete</div>
                          <div class="vuecal__event-title vuecal__event-title--edit" contenteditable="plaintext-only">
                            testing golf course
                          </div>
                          <div class="vuecal__event-time">19:00<span>&nbsp;- 20:00</span><!----></div>
                          <div class="vuecal__event-content"><i class="fa-solid fa-cart-shopping"></i></div>
                          <div class="vuecal__event-resize-handle" contenteditable="false"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="vuecal__cell vuecal__cell--has-events">
                    <div class="vuecal__flex vuecal__cell-content" data-split="false" column="" tabindex="0">
                      <div class="vuecal__cell-events">
                        <div class="vuecal__event sport" tabindex="0" draggable="true"
                          style="top: 400px; height: 120px; width: 100%; left: 0%;">
                          <div class="vuecal__event-delete">Delete</div>
                          <div class="vuecal__event-title vuecal__event-title--edit" contenteditable="plaintext-only">
                            Golf with John
                          </div>
                          <div class="vuecal__event-time">19:00<span>&nbsp;- 22:00</span><!----></div>
                          <div class="vuecal__event-content"><i class="fa-solid fa-golf-ball-tee"></i></div>
                          <div class="vuecal__event-resize-handle" contenteditable="false"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="vuecal__cell vuecal__cell--has-events">
                    <div class="vuecal__flex vuecal__cell-content" data-split="false" column="" tabindex="0">
                      <!----><!---->
                      <div class="vuecal__cell-events">
                        <div class="vuecal__event event" tabindex="0" draggable="true"
                          style="top: 40px; height: 120px; width: 100%; left: 0%;">
                          <div class="vuecal__event-delete">Delete</div>
                          <div class="vuecal__event-title vuecal__event-title--edit" contenteditable="plaintext-only">
                            Dad's birthday!
                          </div>
                          <div class="vuecal__event-time">10:00<span>&nbsp;- 13:00</span><!----></div>
                          <div class="vuecal__event-content"><i class="fa-solid fa-cake-candles"></i></div>
                          <div class="vuecal__event-resize-handle" contenteditable="false"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="vuecal__cell vuecal__cell--has-events">
                    <div class="vuecal__flex vuecal__cell-content" data-split="false" column="" tabindex="0">
                      <!----><!---->
                      <div class="vuecal__cell-events">
                        <div class="vuecal__event duty" tabindex="0" draggable="true"
                          style="top: 480px; height: 80px; width: 100%; left: 0%;">
                          <div class="vuecal__event-delete">Delete</div>
                          <div class="vuecal__event-title vuecal__event-title--edit" contenteditable="plaintext-only">Do
                            Homework</div>
                          <div class="vuecal__event-time">21:00<span>&nbsp;- 24:00</span><!----></div>
                          <div class="vuecal__event-content"><i class="fa-solid fa-house-laptop"></i></div>
                          <div class="vuecal__event-resize-handle" contenteditable="false"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="vuecal__cell vuecal__cell--selected vuecal__cell--has-events">
                    <div class="vuecal__flex vuecal__cell-content" data-split="false" column="" tabindex="0">
                      <!----><!---->
                      <div class="vuecal__cell-events">
                        <div class="vuecal__event meet" tabindex="0" draggable="true"
                          style="top: 240px; height: 120px; width: 100%; left: 0%;">
                          <div class="vuecal__event-delete">Delete</div>
                          <div class="vuecal__event-title vuecal__event-title--edit" contenteditable="plaintext-only">
                            Meeting at work
                          </div>
                          <div class="vuecal__event-time">15:00<span>&nbsp;- 18:00</span><!----></div>
                          <div class="vuecal__event-content"><i class="fa-solid fa-handshake"></i></div>
                          <div class="vuecal__event-resize-handle" contenteditable="false"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="vuecal__cell vuecal__cell--has-events">
                    <div class="vuecal__flex vuecal__cell-content" data-split="false" column="" tabindex="0">
                      <!----><!---->
                      <div class="vuecal__cell-events">
                        <div class="vuecal__event sport" tabindex="0" draggable="true"
                          style="top: 0px; height: 200px; width: 100%; left: 0%;">
                          <div class="vuecal__event-delete">Delete</div>
                          <div class="vuecal__event-title vuecal__event-title--edit" contenteditable="plaintext-only">
                            Hiking</div>
                          <div class="vuecal__event-time">09:00<span>&nbsp;- 14:00</span><!----></div>
                          <div class="vuecal__event-content"><i class="fa-solid fa-person-hiking"></i></div>
                          <div class="vuecal__event-resize-handle" contenteditable="false"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="vuecal__cell vuecal__cell--has-events">
                    <div class="vuecal__flex vuecal__cell-content" data-split="false" column="" tabindex="0">
                      <!----><!---->
                      <div class="vuecal__cell-events">
                        <div class="vuecal__event event" tabindex="0" draggable="true"
                          style="top: 320px; height: 240px; width: 100%; left: 0%;">
                          <div class="vuecal__event-delete">Delete</div>
                          <div class="vuecal__event-title vuecal__event-title--edit" contenteditable="plaintext-only">
                            Party at Frank
                            house</div>
                          <div class="vuecal__event-time">17:00<span>&nbsp;- 23:00</span><!----></div>
                          <div class="vuecal__event-content"><i class="fa-solid fa-gift"></i></div>
                          <div class="vuecal__event-resize-handle" contenteditable="false"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><!---->
      </div>
    </div>
  </div>
</template>

<style scoped>
.container[data-v-e2bca4e0] {
  margin-left: auto;
  margin-right: auto;
  width: 100%
}

@media (min-width: 500px) {
  .container[data-v-e2bca4e0] {
    max-width: 500px
  }
}

@media (min-width: 768px) {
  .container[data-v-e2bca4e0] {
    max-width: 768px
  }
}

@media (min-width: 968px) {
  .container[data-v-e2bca4e0] {
    max-width: 968px
  }
}

@media (min-width: 1200px) {
  .container[data-v-e2bca4e0] {
    max-width: 1200px
  }
}

.main-content[data-v-e2bca4e0] {
  display: grid;
  grid-template-columns: 0 1fr;
  transition-duration: .15s;
  transition-property: all;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1)
}

@media (min-width: 1200px) {
  .main-content[data-v-e2bca4e0] {
    grid-template-columns: 212px 1fr
  }
}


.container[data-v-587eeec9] {
  margin-left: auto;
  margin-right: auto;
  width: 100%
}

@media (min-width: 500px) {
  .container[data-v-587eeec9] {
    max-width: 500px
  }
}

@media (min-width: 768px) {
  .container[data-v-587eeec9] {
    max-width: 768px
  }
}

@media (min-width: 968px) {
  .container[data-v-587eeec9] {
    max-width: 968px
  }
}

@media (min-width: 1200px) {
  .container[data-v-587eeec9] {
    max-width: 1200px
  }
}

.show-enter-active[data-v-587eeec9],
.show-leave-active[data-v-587eeec9] {
  transition-duration: .3s;
  transition-property: all;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1)
}

.show-enter-from[data-v-587eeec9],
.show-leave-to[data-v-587eeec9] {
  opacity: 0;
  top: 72px
}

.show-enter-to[data-v-587eeec9],
.show-leave-from[data-v-587eeec9] {
  opacity: 1;
  top: 62px
}


.container[data-v-e5532348] {
  margin-left: auto;
  margin-right: auto;
  width: 100%
}

@media (min-width: 500px) {
  .container[data-v-e5532348] {
    max-width: 500px
  }
}

@media (min-width: 768px) {
  .container[data-v-e5532348] {
    max-width: 768px
  }
}

@media (min-width: 968px) {
  .container[data-v-e5532348] {
    max-width: 968px
  }
}

@media (min-width: 1200px) {
  .container[data-v-e5532348] {
    max-width: 1200px
  }
}

.v-collapse[data-v-e5532348]:not(.show) {
  display: none
}

.collapsing[data-v-e5532348] {
  height: 0;
  overflow: hidden;
  transition-duration: .3s;
  transition-property: all;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1)
}

.sidebar-active[data-v-e5532348] {
  --tw-bg-opacity: 1 !important;
  --tw-text-opacity: 1 !important;
  color: rgb(255 255 255/var(--tw-text-opacity)) !important
}

.sidebar-active[data-v-e5532348],
.sidebar-active[data-v-e5532348]:hover {
  background-color: rgb(79 70 229/var(--tw-bg-opacity)) !important
}

.sidebar-active[data-v-e5532348]:hover,
.sidebar-exact-active[data-v-e5532348] {
  --tw-bg-opacity: 1 !important
}

.sidebar-exact-active[data-v-e5532348] {
  --tw-text-opacity: 1 !important;
  background-color: rgb(129 140 248/var(--tw-bg-opacity)) !important;
  color: rgb(255 255 255/var(--tw-text-opacity)) !important
}


.container[data-v-0dd5c955] {
  margin-left: auto;
  margin-right: auto;
  width: 100%
}

@media (min-width: 500px) {
  .container[data-v-0dd5c955] {
    max-width: 500px
  }
}

@media (min-width: 768px) {
  .container[data-v-0dd5c955] {
    max-width: 768px
  }
}

@media (min-width: 968px) {
  .container[data-v-0dd5c955] {
    max-width: 968px
  }
}

@media (min-width: 1200px) {
  .container[data-v-0dd5c955] {
    max-width: 1200px
  }
}

.row[data-v-0dd5c955] {
  -moz-column-gap: var(--0cc5b438);
  column-gap: var(--0cc5b438);
  display: flex;
  flex-wrap: wrap;
  margin-bottom: .5rem;
  margin-top: .5rem;
  padding-bottom: .5rem;
  padding-top: .5rem;
  row-gap: var(--0f2d51e6)
}


.v-collapse[data-v-b0d2eeec]:not(.show) {
  display: none
}

.collapsing[data-v-b0d2eeec] {
  height: 0;
  overflow: hidden;
  transition-duration: .3s;
  transition-property: all;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1)
}


.header[data-v-a36a6861] {
  box-sizing: border-box;
  height: 34px;
  position: relative;
  z-index: 2
}

.header>.dropdown[data-v-a36a6861] {
  left: 18px;
  position: absolute;
  top: 12px
}

.header>.copy_code[data-v-a36a6861] {
  position: absolute;
  right: 12px;
  top: 10px
}

.code_editor[data-v-a36a6861] {
  display: flex;
  flex-direction: column;
  font-size: 0;
  position: relative;
  text-align: left
}

.code_editor>.code_area[data-v-a36a6861] {
  overflow: hidden;
  position: relative
}

.code_editor>.code_area>pre>code[data-v-a36a6861],
.code_editor>.code_area>textarea[data-v-a36a6861] {
  font-family: Consolas, Monaco, monospace;
  font-size: 16px;
  line-height: 1.5;
  padding: 0 20px 20px
}

.code_editor>.code_area>textarea[data-v-a36a6861] {
  -webkit-text-fill-color: transparent;
  word-wrap: normal;
  background: none;
  border: 0;
  box-sizing: border-box;
  caret-color: #7f7f7f;
  height: 100%;
  left: 0;
  overflow-y: hidden;
  position: absolute;
  resize: none;
  top: 0;
  white-space: pre;
  width: 100%;
  z-index: 1
}

.code_editor>.code_area>textarea[data-v-a36a6861]:focus-visible,
.code_editor>.code_area>textarea[data-v-a36a6861]:hover {
  outline: none
}

.code_editor>.code_area>pre[data-v-a36a6861] {
  margin: 0;
  position: relative
}

.code_editor>.code_area>pre>code[data-v-a36a6861] {
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  display: block;
  margin: 0;
  overflow-x: visible;
  position: relative
}

.hide_header>.code_area>pre>code[data-v-a36a6861],
.hide_header>.code_area>textarea[data-v-a36a6861] {
  padding: 20px
}

.hide_header.scroll>.code_area[data-v-a36a6861] {
  height: 100%
}

.read_only>.code_area>pre>code[data-v-a36a6861] {
  height: 100%;
  overflow: auto !important;
  width: 100%
}

.wrap_code>.code_area>pre>code[data-v-a36a6861],
.wrap_code>.code_area>textarea[data-v-a36a6861] {
  word-wrap: break-word;
  white-space: pre-wrap
}

.scroll>.code_area[data-v-a36a6861] {
  height: calc(100% - 34px)
}

.scroll>.code_area>textarea[data-v-a36a6861] {
  overflow: auto
}

.scroll>.code_area>pre[data-v-a36a6861] {
  height: 100%;
  overflow: hidden;
  width: 100%
}

.panel[data-v-a36a6861] {
  font-family: sans-serif;
  height: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none
}

.panel>.lang_list[data-v-a36a6861] {
  background: #fff;
  box-sizing: border-box;
  font-size: 13px;
  height: calc(100% - 36px);
  list-style: none;
  margin: 0;
  overflow: auto;
  padding: 0;
  text-align: left
}

.panel>.lang_list>li[data-v-a36a6861] {
  box-sizing: border-box;
  color: #333;
  font-size: 13px;
  line-height: 30px;
  overflow: hidden;
  padding: 0 12px;
  text-overflow: ellipsis;
  transition: background .16s ease, color .16s ease;
  white-space: nowrap
}

.panel>.lang_list>li[data-v-a36a6861]:first-child {
  padding-top: 5px
}

.panel>.lang_list>li[data-v-a36a6861]:last-child {
  padding-bottom: 5px
}

.panel>.lang_list>li[data-v-a36a6861]:hover {
  background: #eee;
  color: #111
}


.atom_one_dark .hljs,
.atom_one_dark.hljs {
  background: #282c34;
  color: #abb2bf
}

.atom_one_dark .hljs-comment,
.atom_one_dark .hljs-quote {
  color: #5c6370;
  font-style: italic
}

.atom_one_dark .hljs-doctag,
.atom_one_dark .hljs-formula,
.atom_one_dark .hljs-keyword {
  color: #c678dd
}

.atom_one_dark .hljs-deletion,
.atom_one_dark .hljs-name,
.atom_one_dark .hljs-section,
.atom_one_dark .hljs-selector-tag,
.atom_one_dark .hljs-subst {
  color: #e06c75
}

.atom_one_dark .hljs-literal {
  color: #56b6c2
}

.atom_one_dark .hljs-addition,
.atom_one_dark .hljs-attribute,
.atom_one_dark .hljs-meta .hljs-string,
.atom_one_dark .hljs-regexp,
.atom_one_dark .hljs-string {
  color: #98c379
}

.atom_one_dark .hljs-attr,
.atom_one_dark .hljs-number,
.atom_one_dark .hljs-selector-attr,
.atom_one_dark .hljs-selector-class,
.atom_one_dark .hljs-selector-pseudo,
.atom_one_dark .hljs-template-variable,
.atom_one_dark .hljs-type,
.atom_one_dark .hljs-variable {
  color: #d19a66
}

.atom_one_dark .hljs-bullet,
.atom_one_dark .hljs-link,
.atom_one_dark .hljs-meta,
.atom_one_dark .hljs-selector-id,
.atom_one_dark .hljs-symbol,
.atom_one_dark .hljs-title {
  color: #61aeee
}

.atom_one_dark .hljs-built_in,
.atom_one_dark .hljs-class .hljs-title,
.atom_one_dark .hljs-title .class_ {
  color: #e6c07b
}

.atom_one_dark .hljs-emphasis {
  font-style: italic
}

.atom_one_dark .hljs-strong {
  font-weight: 700
}

.atom_one_dark .hljs-link {
  text-decoration: underline
}

.atom_one_light .hljs,
.atom_one_light.hljs {
  background: #fafafa;
  color: #383a42
}

.atom_one_light .hljs-comment,
.atom_one_light .hljs-quote {
  color: #a0a1a7;
  font-style: italic
}

.atom_one_light .hljs-doctag,
.atom_one_light .hljs-formula,
.atom_one_light .hljs-keyword {
  color: #a626a4
}

.atom_one_light .hljs-deletion,
.atom_one_light .hljs-name,
.atom_one_light .hljs-section,
.atom_one_light .hljs-selector-tag,
.atom_one_light .hljs-subst {
  color: #e45649
}

.atom_one_light .hljs-literal {
  color: #0184bb
}

.atom_one_light .hljs-addition,
.atom_one_light .hljs-attribute,
.atom_one_light .hljs-meta .hljs-string,
.atom_one_light .hljs-regexp,
.atom_one_light .hljs-string {
  color: #50a14f
}

.atom_one_light .hljs-attr,
.atom_one_light .hljs-number,
.atom_one_light .hljs-selector-attr,
.atom_one_light .hljs-selector-class,
.atom_one_light .hljs-selector-pseudo,
.atom_one_light .hljs-template-variable,
.atom_one_light .hljs-type,
.atom_one_light .hljs-variable {
  color: #986801
}

.atom_one_light .hljs-bullet,
.atom_one_light .hljs-link,
.atom_one_light .hljs-meta,
.atom_one_light .hljs-selector-id,
.atom_one_light .hljs-symbol,
.atom_one_light .hljs-title {
  color: #4078f2
}

.atom_one_light .hljs-built_in,
.atom_one_light .hljs-class .hljs-title,
.atom_one_light .hljs-title .class_ {
  color: #c18401
}

.atom_one_light .hljs-emphasis {
  font-style: italic
}

.atom_one_light .hljs-strong {
  font-weight: 700
}

.atom_one_light .hljs-link {
  text-decoration: underline
}


.copy_code[data-v-6a473003] {
  cursor: pointer;
  height: 20px;
  opacity: .5;
  position: relative;
  transition: opacity .2s ease;
  width: 20px
}

.copy_code[data-v-6a473003]:focus {
  outline: none
}

.copy_code>textarea[data-v-6a473003] {
  background: transparent;
  border-color: transparent;
  height: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
  resize: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  width: 0
}

.copy_code>svg[data-v-6a473003] {
  pointer-events: none
}

.copy_code[data-v-6a473003]:hover {
  opacity: 1
}

.copy_code:hover>.tooltip[data-v-6a473003] {
  display: block
}

.copy_code>.tooltip[data-v-6a473003] {
  background: rgba(0, 0, 0, .8);
  border-radius: 4px;
  bottom: -10px;
  box-sizing: border-box;
  color: #fff;
  display: none;
  font-family: sans-serif;
  font-size: 12px;
  height: 30px;
  left: -96px;
  line-height: 30px;
  position: absolute;
  text-align: center;
  width: 84px
}


.vuecal__weekdays-headings {
  border-bottom: 1px solid #ddd;
  margin-bottom: -1px
}

.vuecal--view-with-time .vuecal__weekdays-headings,
.vuecal--week-numbers .vuecal__weekdays-headings {
  padding-left: 3em
}

.vuecal--view-with-time.vuecal--twelve-hour .vuecal__weekdays-headings {
  font-size: .9em;
  padding-left: 4em
}

.vuecal--overflow-x.vuecal--view-with-time .vuecal__weekdays-headings {
  padding-left: 0
}

.vuecal__heading {
  align-items: center;
  font-weight: 400;
  height: 2.8em;
  justify-content: center;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 100%
}

.vuecal__heading>.vuecal__flex {
  align-items: normal !important;
  height: 100%;
  width: 100%
}

.vuecal--sticky-split-labels .vuecal__heading {
  height: 3.4em
}

.vuecal--day-view .vuecal__heading,
.vuecal--month-view .vuecal__heading,
.vuecal--week-view .vuecal__heading {
  width: 14.2857%
}

.vuecal--hide-weekends.vuecal--day-view .vuecal__heading,
.vuecal--hide-weekends.vuecal--month-view .vuecal__heading,
.vuecal--hide-weekends.vuecal--week-view .vuecal__heading,
.vuecal--years-view .vuecal__heading {
  width: 20%
}

.vuecal--year-view .vuecal__heading {
  width: 33.33%
}

.vuecal__heading .weekday-label {
  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: center
}

.vuecal--small .vuecal__heading .small,
.vuecal--xsmall .vuecal__heading .xsmall {
  display: block
}

.vuecal--small .vuecal__heading .full,
.vuecal--small .vuecal__heading .xsmall,
.vuecal--xsmall .vuecal__heading .full,
.vuecal--xsmall .vuecal__heading .small,
.vuecal__heading .small,
.vuecal__heading .xsmall {
  display: none
}

.vuecal .vuecal__split-days-headers {
  align-items: center
}

@media screen and (max-width: 550px) {
  .vuecal__heading {
    line-height: 1.2
  }

  .vuecal--small .vuecal__heading .small,
  .vuecal--xsmall .vuecal__heading .xsmall,
  .vuecal__heading .small {
    display: block
  }

  .vuecal--small .vuecal__heading .full,
  .vuecal--small .vuecal__heading .xsmall,
  .vuecal--xsmall .vuecal__heading .full,
  .vuecal--xsmall .vuecal__heading .small,
  .vuecal__heading .full,
  .vuecal__heading .xsmall {
    display: none
  }

  .vuecal--overflow-x .vuecal__heading .full,
  .vuecal--small.vuecal--overflow-x .vuecal__heading .small,
  .vuecal--xsmall.vuecal--overflow-x .vuecal__heading .xsmall {
    display: block
  }

  .vuecal--overflow-x .vuecal__heading .small,
  .vuecal--overflow-x .vuecal__heading .xsmall,
  .vuecal--small.vuecal--overflow-x .vuecal__heading .full,
  .vuecal--small.vuecal--overflow-x .vuecal__heading .xsmall,
  .vuecal--xsmall.vuecal--overflow-x .vuecal__heading .full,
  .vuecal--xsmall.vuecal--overflow-x .vuecal__heading .small {
    display: none
  }
}

@media screen and (max-width: 450px) {

  .vuecal--small .vuecal__heading .xsmall,
  .vuecal--xsmall .vuecal__heading .xsmall,
  .vuecal__heading .xsmall {
    display: block
  }

  .vuecal--small .vuecal__heading .full,
  .vuecal--small .vuecal__heading .small,
  .vuecal--xsmall .vuecal__heading .full,
  .vuecal--xsmall .vuecal__heading .small,
  .vuecal__heading .full,
  .vuecal__heading .small {
    display: none
  }

  .vuecal--small.vuecal--overflow-x .vuecal__heading .small,
  .vuecal--xsmall.vuecal--overflow-x .vuecal__heading .xsmall {
    display: block
  }

  .vuecal--small.vuecal--overflow-x .vuecal__heading .full,
  .vuecal--small.vuecal--overflow-x .vuecal__heading .xsmall,
  .vuecal--xsmall.vuecal--overflow-x .vuecal__heading .full,
  .vuecal--xsmall.vuecal--overflow-x .vuecal__heading .small {
    display: none
  }
}

.vuecal__header button {
  font-family: inherit;
  outline: none
}

.vuecal__menu {
  background-color: #00000005;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0
}

.vuecal__view-btn {
  background: none;
  border: none;
  border-bottom: 0 solid;
  box-sizing: border-box;
  color: inherit;
  cursor: pointer;
  font-size: 1.3em;
  height: 2.2em;
  padding: .3em 1em;
  transition: .2s
}

.vuecal__view-btn--active {
  background: hsla(0, 0%, 100%, .15);
  border-bottom-width: 2px
}

.vuecal__title-bar {
  align-items: center;
  background-color: #0000001a;
  display: flex;
  font-size: 1.4em;
  justify-content: space-between;
  line-height: 1.3;
  min-height: 2em;
  text-align: center
}

.vuecal--xsmall .vuecal__title-bar {
  font-size: 1.3em
}

.vuecal__title {
  justify-content: center;
  position: relative
}

.vuecal__title button {
  background: none;
  border: none;
  cursor: pointer
}

.vuecal__title button.slide-fade--left-leave-active,
.vuecal__title button.slide-fade--right-leave-active {
  width: 100%
}

.vuecal__today-btn {
  align-items: center;
  background: none;
  border: none;
  display: flex;
  font-size: .8em;
  position: relative
}

.vuecal__today-btn span.default {
  cursor: pointer;
  font-size: .8em;
  padding: 3px 6px;
  text-transform: uppercase
}

.vuecal__arrow {
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  z-index: 1
}

.vuecal__arrow--prev {
  margin-left: .6em
}

.vuecal__arrow--next {
  margin-right: .6em
}

.vuecal__arrow i.angle {
  border: solid;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: .25em;
  transform: rotate(-45deg)
}

.vuecal__arrow--prev i.angle {
  border-width: 2px 0 0 2px
}

.vuecal__arrow--highlighted,
.vuecal__today-btn--highlighted,
.vuecal__view-btn--highlighted {
  background-color: #0000000a;
  position: relative
}

.vuecal__arrow--highlighted *,
.vuecal__today-btn--highlighted *,
.vuecal__view-btn--highlighted * {
  pointer-events: none
}

.vuecal__arrow--highlighted:after,
.vuecal__arrow--highlighted:before,
.vuecal__today-btn--highlighted:after,
.vuecal__today-btn--highlighted:before,
.vuecal__view-btn--highlighted:after,
.vuecal__view-btn--highlighted:before {
  animation: sonar .8s ease-out infinite;
  background-color: inherit;
  content: "";
  left: 50%;
  pointer-events: none;
  position: absolute;
  top: 50%
}

.vuecal__arrow--highlighted:before,
.vuecal__today-btn--highlighted:before,
.vuecal__view-btn--highlighted:before {
  border-radius: 3em;
  height: 3em;
  margin-left: -1.5em;
  margin-top: -1.5em;
  width: 3em
}

.vuecal__arrow--highlighted:after,
.vuecal__today-btn--highlighted:after,
.vuecal__view-btn--highlighted:after {
  animation-delay: .1s;
  animation-duration: 1.5s;
  border-radius: 2.6em;
  height: 2.6em;
  margin-left: -1.3em;
  margin-top: -1.3em;
  width: 2.6em
}

@keyframes sonar {

  0%,
  20% {
    opacity: 1
  }

  to {
    opacity: 0;
    transform: scale(2.5)
  }
}

@media screen and (max-width: 450px) {
  .vuecal__title {
    font-size: .9em
  }

  .vuecal__view-btn {
    padding-left: .6em;
    padding-right: .6em
  }
}

@media screen and (max-width: 350px) {
  .vuecal__view-btn {
    font-size: 1.1em
  }
}

.vuecal__event {
  background-color: #f8f8f8cc;
  box-sizing: border-box;
  color: #666;
  left: 0;
  overflow: hidden;
  position: relative;
  transition: box-shadow .3s, left .3s, width .3s;
  width: 100%;
  z-index: 1
}

.vuecal--no-time .vuecal__event {
  min-height: 8px
}

.vuecal:not(.vuecal--dragging-event) .vuecal__event:hover {
  z-index: 2
}

.vuecal__cell .vuecal__event * {
  -webkit-user-select: text;
  -moz-user-select: text;
  user-select: text
}

.vuecal--view-with-time .vuecal__event:not(.vuecal__event--all-day) {
  position: absolute
}

.vuecal--view-with-time .vuecal__bg .vuecal__event--all-day {
  bottom: 0;
  opacity: .6;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
  z-index: 0
}

.vuecal--view-with-time .vuecal__all-day .vuecal__event--all-day {
  left: 0;
  position: relative
}

.vuecal__event--background {
  z-index: 0
}

.vuecal__event--focus,
.vuecal__event:focus {
  box-shadow: 1px 1px 6px #0003;
  outline: none;
  z-index: 3
}

.vuecal__event.vuecal__event--dragging {
  opacity: .7
}

.vuecal__event.vuecal__event--static {
  opacity: 0;
  transition: opacity .1s
}

@-moz-document url-prefix() {
  .vuecal__event.vuecal__event--dragging {
    opacity: 1
  }
}

.vuecal__event-resize-handle {
  background-color: #ffffff4d;
  bottom: 0;
  cursor: ns-resize;
  height: 1em;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  transform: translateY(110%);
  transition: .3s
}

.vuecal__event--focus .vuecal__event-resize-handle,
.vuecal__event--resizing .vuecal__event-resize-handle,
.vuecal__event:focus .vuecal__event-resize-handle,
.vuecal__event:hover .vuecal__event-resize-handle {
  opacity: 1;
  transform: translateY(0)
}

.vuecal__event--dragging .vuecal__event-resize-handle {
  display: none
}

.vuecal__event-delete {
  align-items: center;
  background-color: #dd3333d9;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 1.4em;
  justify-content: center;
  left: 0;
  line-height: 1.4em;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(-110%);
  transition: .3s;
  z-index: 0
}

.vuecal__event .vuecal__event-delete {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none
}

.vuecal--full-height-delete .vuecal__event-delete {
  bottom: 0;
  height: auto
}

.vuecal--full-height-delete .vuecal__event-delete:before {
  background-image: url('data:image/svg+xml;utf8,<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21zm5 14.1c.2 0 .2.2.2.2l-.1.3-1 1-.3.1h-.2L12 13.5l-3.5 3.6h-.3-.3l-1-1v-.4-.2l3.6-3.6-3.6-3.5A.4.4 0 017 8l1-1 .3-.2c.1 0 .2 0 .2.2l3.6 3.5L15.6 7l.2-.2c.1 0 .2 0 .3.2l1 1v.5L13.5 12z" fill="%23fff" opacity=".9"/></svg>');
  content: "";
  display: block;
  height: 1.8em;
  width: 1.7em
}

.vuecal__event--deletable .vuecal__event-delete {
  transform: translateY(0);
  z-index: 1
}

.vuecal__event--deletable.vuecal__event--dragging .vuecal__event-delete {
  opacity: 0;
  transition: none
}

.vuecal--month-view .vuecal__event-title {
  font-size: .85em
}

.vuecal--short-events .vuecal__event-title {
  overflow: hidden;
  padding: 0 3px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap
}

.vuecal__event-content,
.vuecal__event-title {
  -webkit-hyphens: auto;
  hyphens: auto
}

.vuecal__event-title--edit {
  background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M442 150l-39 39-80-80 39-39q6-6 15-6t15 6l50 50q6 6 6 15t-6 15zM64 368l236-236 80 80-236 236H64v-80z" fill="%23000" opacity=".4"/></svg>');
  background-position: 120% .15em;
  background-repeat: no-repeat;
  background-size: .4em;
  border-bottom: 1px solid transparent;
  color: inherit;
  outline: none;
  text-align: center;
  transition: .3s;
  width: 100%
}

.vuecal__event-title--edit:focus,
.vuecal__event-title--edit:hover {
  background-position: 99% .15em;
  background-size: 1.2em;
  border-color: #0006
}

.vuecal__cell {
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  text-align: center;
  transition: background-color .15s ease-in-out;
  width: 100%
}

.vuecal__cells.month-view .vuecal__cell,
.vuecal__cells.week-view .vuecal__cell {
  width: 14.2857%
}

.vuecal--hide-weekends .vuecal__cells.month-view .vuecal__cell,
.vuecal--hide-weekends .vuecal__cells.week-view .vuecal__cell,
.vuecal__cells.years-view .vuecal__cell {
  width: 20%
}

.vuecal__cells.year-view .vuecal__cell {
  width: 33.33%
}

.vuecal__cells.day-view .vuecal__cell {
  flex: 1
}

.vuecal--overflow-x.vuecal--day-view .vuecal__cell {
  width: auto
}

.vuecal--click-to-navigate .vuecal__cell:not(.vuecal__cell--disabled) {
  cursor: pointer
}

.vuecal--day-view.vuecal--no-time .vuecal__cell:not(.vuecal__cell--has-splits),
.vuecal--view-with-time .vuecal__cell,
.vuecal--week-view.vuecal--no-time .vuecal__cell:not(.vuecal__cell--has-splits) {
  display: block
}

.vuecal__cell.vuecal__cell--has-splits {
  display: flex;
  flex-direction: row
}

.vuecal__cell:before {
  border: 1px solid hsla(0, 0%, 77%, .25);
  bottom: -1px;
  content: "";
  left: 0;
  position: absolute;
  right: -1px;
  top: 0;
  z-index: 0
}

.vuecal--overflow-x.vuecal--day-view .vuecal__cell:before {
  bottom: 0
}

.vuecal__cell--current,
.vuecal__cell--today {
  background-color: #f0f0ff66;
  z-index: 1
}

.vuecal__cell--selected {
  background-color: #ebfff566;
  z-index: 2
}

.vuecal--day-view .vuecal__cell--selected {
  background: none
}

.vuecal__cell--out-of-scope {
  color: #00000040
}

.vuecal__cell--disabled {
  color: #00000040;
  cursor: not-allowed
}

.vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal__cell-split.vuecal__cell-split--highlighted {
  background-color: #0000000a;
  transition-duration: 5ms
}

.vuecal__cell-content {
  height: 100%;
  outline: none;
  position: relative;
  width: 100%
}

.vuecal--month-view .vuecal__cell-content,
.vuecal--year-view .vuecal__cell-content,
.vuecal--years-view .vuecal__cell-content {
  justify-content: center
}

.vuecal__cell .cell-time-labels {
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  position: absolute;
  right: 0;
  top: 0
}

.vuecal__cell .cell-time-label {
  flex-grow: 1;
  font-size: .8em;
  line-height: 1.7;
  opacity: .3
}

.vuecal__cell-split {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  position: relative;
  transition: background-color .15s ease-in-out
}

.vuecal__cell-events {
  width: 100%
}

.vuecal__cell-events-count {
  background: #999;
  border-radius: 12px;
  box-sizing: border-box;
  color: #fff;
  font-size: 10px;
  height: 12px;
  left: 50%;
  line-height: 12px;
  min-width: 12px;
  padding: 0 3px;
  position: absolute;
  top: 65%;
  transform: translate(-50%)
}

.vuecal__cell .vuecal__special-hours {
  box-sizing: border-box;
  left: 0;
  position: absolute;
  right: 0
}

.vuecal--overflow-x.vuecal--week-view .vuecal__cell,
.vuecal__cell-split {
  overflow: hidden
}

.vuecal__no-event {
  color: #aaa;
  justify-self: flex-start;
  margin-bottom: auto;
  padding-top: 1em
}

.vuecal__all-day .vuecal__no-event {
  display: none
}

.vuecal__now-line {
  border-top: 1px solid;
  color: red;
  height: 0;
  left: 0;
  opacity: .6;
  position: absolute;
  width: 100%;
  z-index: 1
}

.vuecal__now-line:before {
  border: 5px solid transparent;
  border-left-color: currentcolor;
  content: "";
  left: 0;
  position: absolute;
  top: -6px
}

.vuecal {
  box-shadow: inset 0 0 0 1px #00000014;
  height: 100%
}

.vuecal *,
.vuecal--has-touch :not(.vuecal__event-title--edit) {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none
}

.vuecal--has-touch :not(.vuecal__event-title--edit) {
  -webkit-touch-callout: none
}

.vuecal .clickable {
  cursor: pointer
}

.vuecal--drag-creating-event,
.vuecal--resizing-event {
  cursor: ns-resize
}

.vuecal--dragging-event {
  cursor: move;
  cursor: grabbing
}

.vuecal .dragging-helper {
  background: rgba(138, 190, 230, .8);
  border: 1px solid #61a9e0;
  height: 40px;
  position: absolute;
  width: 60px;
  z-index: 10
}

.vuecal--xsmall {
  font-size: .9em
}

.vuecal__flex {
  display: flex;
  flex-direction: row
}

.vuecal__flex[column] {
  flex: 1 1 auto;
  flex-direction: column
}

.vuecal__flex[grow] {
  flex: 1 1 auto;
  width: 100%
}

.vuecal__flex[wrap] {
  flex-wrap: wrap
}

.vuecal__split-days-headers.slide-fade--right-leave-active {
  display: none
}

.vuecal--week-numbers.vuecal--month-view .vuecal__split-days-headers {
  margin-left: 3em
}

.vuecal--day-view:not(.vuecal--overflow-x) .vuecal__split-days-headers {
  height: 2.2em;
  margin-left: 3em
}

.vuecal--day-view.vuecal--twelve-hour:not(.vuecal--overflow-x) .vuecal__split-days-headers {
  margin-left: 4em
}

.vuecal__split-days-headers .day-split-header {
  align-items: center;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  height: 100%;
  justify-content: center
}

.vuecal__split-days-headers .vuecal--day-view.vuecal--overflow-x.vuecal--sticky-split-labels .day-split-header {
  height: 1.5em
}

.vuecal__body {
  overflow: hidden;
  position: relative
}

.vuecal__all-day {
  flex-shrink: 0;
  margin-bottom: -1px;
  min-height: 1.7em
}

.vuecal__all-day-text {
  align-items: center;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  color: #999;
  display: flex;
  flex-shrink: 0;
  -webkit-hyphens: auto;
  hyphens: auto;
  justify-content: flex-end;
  padding-right: 2px;
  width: 3em
}

.vuecal__all-day-text span {
  font-size: .85em;
  line-height: 1.1;
  text-align: right
}

.vuecal--twelve-hour .vuecal__all-day>span {
  width: 4em
}

.vuecal__bg {
  -webkit-overflow-scrolling: touch;
  min-height: 60px;
  overflow: auto;
  overflow-x: hidden;
  position: relative;
  width: 100%
}

.vuecal--no-time .vuecal__bg {
  display: flex;
  flex: 1 1 auto;
  overflow: auto
}

.vuecal__week-numbers {
  flex-shrink: 0 !important;
  width: 3em
}

.vuecal__week-numbers .vuecal__week-number-cell {
  align-items: center;
  font-size: .9em;
  justify-content: center;
  justify-items: center;
  opacity: .4
}

.vuecal__scrollbar-check {
  bottom: 0;
  left: 0;
  overflow: scroll;
  position: absolute;
  right: 0;
  top: 0;
  visibility: hidden;
  z-index: -1
}

.vuecal__scrollbar-check div {
  height: 120%
}

.vuecal__time-column {
  flex-shrink: 0;
  height: 100%;
  width: 3em
}

.vuecal--twelve-hour .vuecal__time-column {
  font-size: .9em;
  width: 4em
}

.vuecal--overflow-x.vuecal--week-view .vuecal__time-column {
  box-shadow: 0 1px 1px #0000004d;
  margin-top: 2.8em
}

.vuecal--overflow-x.vuecal--week-view.vuecal--sticky-split-labels .vuecal__time-column {
  margin-top: 3.4em
}

.vuecal--overflow-x.vuecal--day-view.vuecal--sticky-split-labels .vuecal__time-column {
  margin-top: 1.5em
}

.vuecal__time-column .vuecal__time-cell {
  color: #999;
  font-size: .9em;
  padding-right: 2px;
  text-align: right
}

.vuecal__time-column .vuecal__time-cell-line:before {
  border-top: 1px solid hsla(0, 0%, 77%, .3);
  content: "";
  left: 0;
  position: absolute;
  right: 0
}

.vuecal__cells {
  margin: 0 1px 1px 0
}

.vuecal--overflow-x.vuecal--day-view .vuecal__cells {
  margin: 0
}

.vuecal--events-on-month-view.vuecal--short-events .vuecal__cells {
  width: 99.9%
}

.vuecal--overflow-x.vuecal--day-view .vuecal__cells,
.vuecal--overflow-x.vuecal--week-view .vuecal__cells {
  flex-wrap: nowrap;
  overflow: auto
}

.slide-fade--left-enter-active,
.slide-fade--left-leave-active,
.slide-fade--right-enter-active,
.slide-fade--right-leave-active {
  transition: .25s ease-out
}

.slide-fade--left-enter-from,
.slide-fade--right-leave-to {
  opacity: 0;
  transform: translate(-15px)
}

.slide-fade--left-leave-to,
.slide-fade--right-enter-from {
  opacity: 0;
  transform: translate(15px)
}

.slide-fade--left-leave-active,
.slide-fade--right-leave-active {
  height: 100%;
  position: absolute !important
}

.vuecal__title-bar .slide-fade--left-leave-active,
.vuecal__title-bar .slide-fade--right-leave-active {
  height: auto;
  left: 0;
  right: 0
}

.vuecal__heading .slide-fade--left-leave-active,
.vuecal__heading .slide-fade--right-leave-active {
  align-items: center;
  display: flex
}

.vuecal--green-theme .vuecal__cell-events-count,
.vuecal--green-theme .vuecal__menu {
  background-color: #42b983;
  color: #fff
}

.vuecal--green-theme .vuecal__title-bar {
  background-color: #e4f5ef
}

.vuecal--green-theme .vuecal__cell--current,
.vuecal--green-theme .vuecal__cell--today {
  background-color: #f0f0ff66
}

.vuecal--green-theme:not(.vuecal--day-view) .vuecal__cell--selected {
  background-color: #ebfff566
}

.vuecal--green-theme .vuecal__cell--selected:before {
  border-color: #42b98380
}

.vuecal--green-theme .vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal--green-theme .vuecal__cell-split--highlighted {
  background-color: #c3ffe180
}

.vuecal--green-theme .vuecal__arrow--highlighted,
.vuecal--green-theme .vuecal__today-btn--highlighted,
.vuecal--green-theme .vuecal__view-btn--highlighted {
  background-color: #88ecbf40
}

.vuecal--blue-theme .vuecal__cell-events-count,
.vuecal--blue-theme .vuecal__menu {
  background-color: #42a3b9cc;
  color: #fff
}

.vuecal--blue-theme .vuecal__title-bar {
  background-color: #00a5bc4d
}

.vuecal--blue-theme .vuecal__cell--current,
.vuecal--blue-theme .vuecal__cell--today {
  background-color: #f0f0ff66
}

.vuecal--blue-theme:not(.vuecal--day-view) .vuecal__cell--selected {
  background-color: #ebfdff66
}

.vuecal--blue-theme .vuecal__cell--selected:before {
  border-color: #73bfcc80
}

.vuecal--blue-theme .vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal--blue-theme .vuecal__cell-split--highlighted {
  background-color: #00a5bc0f
}

.vuecal--blue-theme .vuecal__arrow--highlighted,
.vuecal--blue-theme .vuecal__today-btn--highlighted,
.vuecal--blue-theme .vuecal__view-btn--highlighted {
  background-color: #42a3b933
}

.vuecal--rounded-theme .vuecal__weekdays-headings {
  border: none
}

.vuecal--rounded-theme .vuecal__cell,
.vuecal--rounded-theme .vuecal__cell:before {
  background: none;
  border: none
}

.vuecal--rounded-theme .vuecal__cell--out-of-scope {
  opacity: .4
}

.vuecal--rounded-theme .vuecal__cell-content {
  border: 1px solid transparent;
  border-radius: 30px;
  color: #333;
  flex-grow: 0;
  height: 30px;
  width: 30px
}

.vuecal--rounded-theme.vuecal--day-view .vuecal__cell-content {
  background: none;
  width: auto
}

.vuecal--rounded-theme.vuecal--year-view .vuecal__cell {
  width: 33.33%
}

.vuecal--rounded-theme.vuecal--year-view .vuecal__cell-content {
  width: 85px
}

.vuecal--rounded-theme.vuecal--years-view .vuecal__cell-content {
  width: 52px
}

.vuecal--rounded-theme .vuecal__cell {
  background-color: transparent !important
}

.vuecal--rounded-theme.vuecal--green-theme:not(.vuecal--day-view) .vuecal__cell-content {
  background-color: #f1faf7
}

.vuecal--rounded-theme.vuecal--green-theme:not(.vuecal--day-view) .vuecal__cell--today .vuecal__cell-content {
  background-color: #42b983;
  color: #fff
}

.vuecal--rounded-theme.vuecal--green-theme .vuecal--day-view .vuecal__cell--today:before {
  background-color: #42b9830d
}

.vuecal--rounded-theme.vuecal--green-theme:not(.vuecal--day-view) .vuecal__cell--selected .vuecal__cell-content {
  border-color: #42b983
}

.vuecal--rounded-theme.vuecal--green-theme .vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal--rounded-theme.vuecal--green-theme .vuecal__cell-split--highlighted {
  background-color: #c3ffe180
}

.vuecal--rounded-theme.vuecal--blue-theme:not(.vuecal--day-view) .vuecal__cell-content {
  background-color: #64b6ff33
}

.vuecal--rounded-theme.vuecal--blue-theme:not(.vuecal--day-view) .vuecal__cell--today .vuecal__cell-content {
  background-color: #8fb7e4;
  color: #fff
}

.vuecal--rounded-theme.vuecal--blue-theme .vuecal--day-view .vuecal__cell--today:before {
  background-color: #8fb7e41a
}

.vuecal--rounded-theme.vuecal--blue-theme:not(.vuecal--day-view) .vuecal__cell--selected .vuecal__cell-content {
  border-color: #61a9e0
}

.vuecal--rounded-theme.vuecal--blue-theme .vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal--rounded-theme.vuecal--blue-theme .vuecal__cell-split--highlighted {
  background-color: #00a5bc0f
}

.vuecal--date-picker .vuecal__title-bar {
  font-size: 1.2em
}

.vuecal--date-picker .vuecal__heading {
  font-weight: 500;
  height: 2.2em;
  opacity: .4
}

.vuecal--date-picker .vuecal__weekdays-headings {
  border: none
}

.vuecal--date-picker .vuecal__body {
  margin-left: 1px
}

.vuecal--date-picker .vuecal__cell,
.vuecal--date-picker .vuecal__cell:before {
  background: none;
  border: none
}

.vuecal--date-picker .vuecal__cell-content {
  border: 1px solid transparent;
  border-radius: 25px;
  flex-grow: 0;
  height: 26px;
  transition: background-color .2s cubic-bezier(.39, .58, .57, 1)
}

.vuecal--date-picker.vuecal--years-view .vuecal__cell-content {
  flex: 0;
  height: 24px;
  padding: 0 4px
}

.vuecal--date-picker.vuecal--year-view .vuecal__cell-content {
  flex: 0;
  padding: 0 15px
}

.vuecal--date-picker.vuecal--month-view .vuecal__cell-content {
  width: 26px
}

.vuecal--date-picker:not(.vuecal--day-view) .vuecal__cell-content:hover {
  background-color: #0000001a
}

.vuecal--date-picker:not(.vuecal--day-view) .vuecal__cell--selected .vuecal__cell-content {
  background-color: #42b982;
  color: #fff
}

.vuecal--date-picker:not(.vuecal--day-view) .vuecal__cell--current .vuecal__cell-content,
.vuecal--date-picker:not(.vuecal--day-view) .vuecal__cell--today .vuecal__cell-content {
  border-color: #42b982
}


.vuecal__weekdays-headings {
  border-bottom: 1px solid #ddd;
  margin-bottom: -1px
}

.vuecal--view-with-time .vuecal__weekdays-headings,
.vuecal--week-numbers .vuecal__weekdays-headings {
  padding-left: 3em
}

.vuecal--view-with-time.vuecal--twelve-hour .vuecal__weekdays-headings {
  font-size: .9em;
  padding-left: 4em
}

.vuecal--overflow-x.vuecal--view-with-time .vuecal__weekdays-headings {
  padding-left: 0
}

.vuecal__heading {
  align-items: center;
  font-weight: 400;
  height: 2.8em;
  justify-content: center;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 100%
}

.vuecal__heading>.vuecal__flex {
  align-items: normal !important;
  height: 100%;
  width: 100%
}

.vuecal--sticky-split-labels .vuecal__heading {
  height: 3.4em
}

.vuecal--day-view .vuecal__heading,
.vuecal--month-view .vuecal__heading,
.vuecal--week-view .vuecal__heading {
  width: 14.2857%
}

.vuecal--hide-weekends.vuecal--day-view .vuecal__heading,
.vuecal--hide-weekends.vuecal--month-view .vuecal__heading,
.vuecal--hide-weekends.vuecal--week-view .vuecal__heading,
.vuecal--years-view .vuecal__heading {
  width: 20%
}

.vuecal--year-view .vuecal__heading {
  width: 33.33%
}

.vuecal__heading .weekday-label {
  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: center
}

.vuecal--small .vuecal__heading .small,
.vuecal--xsmall .vuecal__heading .xsmall {
  display: block
}

.vuecal--small .vuecal__heading .full,
.vuecal--small .vuecal__heading .xsmall,
.vuecal--xsmall .vuecal__heading .full,
.vuecal--xsmall .vuecal__heading .small,
.vuecal__heading .small,
.vuecal__heading .xsmall {
  display: none
}

.vuecal .vuecal__split-days-headers {
  align-items: center
}

@media screen and (max-width: 550px) {
  .vuecal__heading {
    line-height: 1.2
  }

  .vuecal--small .vuecal__heading .small,
  .vuecal--xsmall .vuecal__heading .xsmall,
  .vuecal__heading .small {
    display: block
  }

  .vuecal--small .vuecal__heading .full,
  .vuecal--small .vuecal__heading .xsmall,
  .vuecal--xsmall .vuecal__heading .full,
  .vuecal--xsmall .vuecal__heading .small,
  .vuecal__heading .full,
  .vuecal__heading .xsmall {
    display: none
  }

  .vuecal--overflow-x .vuecal__heading .full,
  .vuecal--small.vuecal--overflow-x .vuecal__heading .small,
  .vuecal--xsmall.vuecal--overflow-x .vuecal__heading .xsmall {
    display: block
  }

  .vuecal--overflow-x .vuecal__heading .small,
  .vuecal--overflow-x .vuecal__heading .xsmall,
  .vuecal--small.vuecal--overflow-x .vuecal__heading .full,
  .vuecal--small.vuecal--overflow-x .vuecal__heading .xsmall,
  .vuecal--xsmall.vuecal--overflow-x .vuecal__heading .full,
  .vuecal--xsmall.vuecal--overflow-x .vuecal__heading .small {
    display: none
  }
}

@media screen and (max-width: 450px) {

  .vuecal--small .vuecal__heading .xsmall,
  .vuecal--xsmall .vuecal__heading .xsmall,
  .vuecal__heading .xsmall {
    display: block
  }

  .vuecal--small .vuecal__heading .full,
  .vuecal--small .vuecal__heading .small,
  .vuecal--xsmall .vuecal__heading .full,
  .vuecal--xsmall .vuecal__heading .small,
  .vuecal__heading .full,
  .vuecal__heading .small {
    display: none
  }

  .vuecal--small.vuecal--overflow-x .vuecal__heading .small,
  .vuecal--xsmall.vuecal--overflow-x .vuecal__heading .xsmall {
    display: block
  }

  .vuecal--small.vuecal--overflow-x .vuecal__heading .full,
  .vuecal--small.vuecal--overflow-x .vuecal__heading .xsmall,
  .vuecal--xsmall.vuecal--overflow-x .vuecal__heading .full,
  .vuecal--xsmall.vuecal--overflow-x .vuecal__heading .small {
    display: none
  }
}

.vuecal__header button {
  font-family: inherit;
  outline: none
}

.vuecal__menu {
  background-color: #00000005;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0
}

.vuecal__view-btn {
  background: none;
  border: none;
  border-bottom: 0 solid;
  box-sizing: border-box;
  color: inherit;
  cursor: pointer;
  font-size: 1.3em;
  height: 2.2em;
  padding: .3em 1em;
  transition: .2s
}

.vuecal__view-btn--active {
  background: hsla(0, 0%, 100%, .15);
  border-bottom-width: 2px
}

.vuecal__title-bar {
  align-items: center;
  background-color: #0000001a;
  display: flex;
  font-size: 1.4em;
  justify-content: space-between;
  line-height: 1.3;
  min-height: 2em;
  text-align: center
}

.vuecal--xsmall .vuecal__title-bar {
  font-size: 1.3em
}

.vuecal__title {
  justify-content: center;
  position: relative
}

.vuecal__title button {
  background: none;
  border: none;
  cursor: pointer
}

.vuecal__title button.slide-fade--left-leave-active,
.vuecal__title button.slide-fade--right-leave-active {
  width: 100%
}

.vuecal__today-btn {
  align-items: center;
  background: none;
  border: none;
  display: flex;
  font-size: .8em;
  position: relative
}

.vuecal__today-btn span.default {
  cursor: pointer;
  font-size: .8em;
  padding: 3px 6px;
  text-transform: uppercase
}

.vuecal__arrow {
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  z-index: 1
}

.vuecal__arrow--prev {
  margin-left: .6em
}

.vuecal__arrow--next {
  margin-right: .6em
}

.vuecal__arrow i.angle {
  border: solid;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: .25em;
  transform: rotate(-45deg)
}

.vuecal__arrow--prev i.angle {
  border-width: 2px 0 0 2px
}

.vuecal__arrow--highlighted,
.vuecal__today-btn--highlighted,
.vuecal__view-btn--highlighted {
  background-color: #0000000a;
  position: relative
}

.vuecal__arrow--highlighted *,
.vuecal__today-btn--highlighted *,
.vuecal__view-btn--highlighted * {
  pointer-events: none
}

.vuecal__arrow--highlighted:after,
.vuecal__arrow--highlighted:before,
.vuecal__today-btn--highlighted:after,
.vuecal__today-btn--highlighted:before,
.vuecal__view-btn--highlighted:after,
.vuecal__view-btn--highlighted:before {
  animation: sonar .8s ease-out infinite;
  background-color: inherit;
  content: "";
  left: 50%;
  pointer-events: none;
  position: absolute;
  top: 50%
}

.vuecal__arrow--highlighted:before,
.vuecal__today-btn--highlighted:before,
.vuecal__view-btn--highlighted:before {
  border-radius: 3em;
  height: 3em;
  margin-left: -1.5em;
  margin-top: -1.5em;
  width: 3em
}

.vuecal__arrow--highlighted:after,
.vuecal__today-btn--highlighted:after,
.vuecal__view-btn--highlighted:after {
  animation-delay: .1s;
  animation-duration: 1.5s;
  border-radius: 2.6em;
  height: 2.6em;
  margin-left: -1.3em;
  margin-top: -1.3em;
  width: 2.6em
}

@keyframes sonar {

  0%,
  20% {
    opacity: 1
  }

  to {
    opacity: 0;
    transform: scale(2.5)
  }
}

@media screen and (max-width: 450px) {
  .vuecal__title {
    font-size: .9em
  }

  .vuecal__view-btn {
    padding-left: .6em;
    padding-right: .6em
  }
}

@media screen and (max-width: 350px) {
  .vuecal__view-btn {
    font-size: 1.1em
  }
}

.vuecal__event {
  background-color: #f8f8f8cc;
  box-sizing: border-box;
  color: #666;
  left: 0;
  overflow: hidden;
  position: relative;
  transition: box-shadow .3s, left .3s, width .3s;
  width: 100%;
  z-index: 1
}

.vuecal--no-time .vuecal__event {
  min-height: 8px
}

.vuecal:not(.vuecal--dragging-event) .vuecal__event:hover {
  z-index: 2
}

.vuecal__cell .vuecal__event * {
  -webkit-user-select: text;
  -moz-user-select: text;
  user-select: text
}

.vuecal--view-with-time .vuecal__event:not(.vuecal__event--all-day) {
  position: absolute
}

.vuecal--view-with-time .vuecal__bg .vuecal__event--all-day {
  bottom: 0;
  opacity: .6;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
  z-index: 0
}

.vuecal--view-with-time .vuecal__all-day .vuecal__event--all-day {
  left: 0;
  position: relative
}

.vuecal__event--background {
  z-index: 0
}

.vuecal__event--focus,
.vuecal__event:focus {
  box-shadow: 1px 1px 6px #0003;
  outline: none;
  z-index: 3
}

.vuecal__event.vuecal__event--dragging {
  opacity: .7
}

.vuecal__event.vuecal__event--static {
  opacity: 0;
  transition: opacity .1s
}

@-moz-document url-prefix() {
  .vuecal__event.vuecal__event--dragging {
    opacity: 1
  }
}

.vuecal__event-resize-handle {
  background-color: #ffffff4d;
  bottom: 0;
  cursor: ns-resize;
  height: 1em;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  transform: translateY(110%);
  transition: .3s
}

.vuecal__event--focus .vuecal__event-resize-handle,
.vuecal__event--resizing .vuecal__event-resize-handle,
.vuecal__event:focus .vuecal__event-resize-handle,
.vuecal__event:hover .vuecal__event-resize-handle {
  opacity: 1;
  transform: translateY(0)
}

.vuecal__event--dragging .vuecal__event-resize-handle {
  display: none
}

.vuecal__event-delete {
  align-items: center;
  background-color: #dd3333d9;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 1.4em;
  justify-content: center;
  left: 0;
  line-height: 1.4em;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(-110%);
  transition: .3s;
  z-index: 0
}

.vuecal__event .vuecal__event-delete {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none
}

.vuecal--full-height-delete .vuecal__event-delete {
  bottom: 0;
  height: auto
}

.vuecal--full-height-delete .vuecal__event-delete:before {
  background-image: url('data:image/svg+xml;utf8,<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21zm5 14.1c.2 0 .2.2.2.2l-.1.3-1 1-.3.1h-.2L12 13.5l-3.5 3.6h-.3-.3l-1-1v-.4-.2l3.6-3.6-3.6-3.5A.4.4 0 017 8l1-1 .3-.2c.1 0 .2 0 .2.2l3.6 3.5L15.6 7l.2-.2c.1 0 .2 0 .3.2l1 1v.5L13.5 12z" fill="%23fff" opacity=".9"/></svg>');
  content: "";
  display: block;
  height: 1.8em;
  width: 1.7em
}

.vuecal__event--deletable .vuecal__event-delete {
  transform: translateY(0);
  z-index: 1
}

.vuecal__event--deletable.vuecal__event--dragging .vuecal__event-delete {
  opacity: 0;
  transition: none
}

.vuecal--month-view .vuecal__event-title {
  font-size: .85em
}

.vuecal--short-events .vuecal__event-title {
  overflow: hidden;
  padding: 0 3px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap
}

.vuecal__event-content,
.vuecal__event-title {
  -webkit-hyphens: auto;
  hyphens: auto
}

.vuecal__event-title--edit {
  background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M442 150l-39 39-80-80 39-39q6-6 15-6t15 6l50 50q6 6 6 15t-6 15zM64 368l236-236 80 80-236 236H64v-80z" fill="%23000" opacity=".4"/></svg>');
  background-position: 120% .15em;
  background-repeat: no-repeat;
  background-size: .4em;
  border-bottom: 1px solid transparent;
  color: inherit;
  outline: none;
  text-align: center;
  transition: .3s;
  width: 100%
}

.vuecal__event-title--edit:focus,
.vuecal__event-title--edit:hover {
  background-position: 99% .15em;
  background-size: 1.2em;
  border-color: #0006
}

.vuecal__cell {
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  text-align: center;
  transition: background-color .15s ease-in-out;
  width: 100%
}

.vuecal__cells.month-view .vuecal__cell,
.vuecal__cells.week-view .vuecal__cell {
  width: 14.2857%
}

.vuecal--hide-weekends .vuecal__cells.month-view .vuecal__cell,
.vuecal--hide-weekends .vuecal__cells.week-view .vuecal__cell,
.vuecal__cells.years-view .vuecal__cell {
  width: 20%
}

.vuecal__cells.year-view .vuecal__cell {
  width: 33.33%
}

.vuecal__cells.day-view .vuecal__cell {
  flex: 1
}

.vuecal--overflow-x.vuecal--day-view .vuecal__cell {
  width: auto
}

.vuecal--click-to-navigate .vuecal__cell:not(.vuecal__cell--disabled) {
  cursor: pointer
}

.vuecal--day-view.vuecal--no-time .vuecal__cell:not(.vuecal__cell--has-splits),
.vuecal--view-with-time .vuecal__cell,
.vuecal--week-view.vuecal--no-time .vuecal__cell:not(.vuecal__cell--has-splits) {
  display: block
}

.vuecal__cell.vuecal__cell--has-splits {
  display: flex;
  flex-direction: row
}

.vuecal__cell:before {
  border: 1px solid hsla(0, 0%, 77%, .25);
  bottom: -1px;
  content: "";
  left: 0;
  position: absolute;
  right: -1px;
  top: 0;
  z-index: 0
}

.vuecal--overflow-x.vuecal--day-view .vuecal__cell:before {
  bottom: 0
}

.vuecal__cell--current,
.vuecal__cell--today {
  background-color: #f0f0ff66;
  z-index: 1
}

.vuecal__cell--selected {
  background-color: #ebfff566;
  z-index: 2
}

.vuecal--day-view .vuecal__cell--selected {
  background: none
}

.vuecal__cell--out-of-scope {
  color: #00000040
}

.vuecal__cell--disabled {
  color: #00000040;
  cursor: not-allowed
}

.vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal__cell-split.vuecal__cell-split--highlighted {
  background-color: #0000000a;
  transition-duration: 5ms
}

.vuecal__cell-content {
  height: 100%;
  outline: none;
  position: relative;
  width: 100%
}

.vuecal--month-view .vuecal__cell-content,
.vuecal--year-view .vuecal__cell-content,
.vuecal--years-view .vuecal__cell-content {
  justify-content: center
}

.vuecal__cell .cell-time-labels {
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  position: absolute;
  right: 0;
  top: 0
}

.vuecal__cell .cell-time-label {
  flex-grow: 1;
  font-size: .8em;
  line-height: 1.7;
  opacity: .3
}

.vuecal__cell-split {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  position: relative;
  transition: background-color .15s ease-in-out
}

.vuecal__cell-events {
  width: 100%
}

.vuecal__cell-events-count {
  background: #999;
  border-radius: 12px;
  box-sizing: border-box;
  color: #fff;
  font-size: 10px;
  height: 12px;
  left: 50%;
  line-height: 12px;
  min-width: 12px;
  padding: 0 3px;
  position: absolute;
  top: 65%;
  transform: translate(-50%)
}

.vuecal__cell .vuecal__special-hours {
  box-sizing: border-box;
  left: 0;
  position: absolute;
  right: 0
}

.vuecal--overflow-x.vuecal--week-view .vuecal__cell,
.vuecal__cell-split {
  overflow: hidden
}

.vuecal__no-event {
  color: #aaa;
  justify-self: flex-start;
  margin-bottom: auto;
  padding-top: 1em
}

.vuecal__all-day .vuecal__no-event {
  display: none
}

.vuecal__now-line {
  border-top: 1px solid;
  color: red;
  height: 0;
  left: 0;
  opacity: .6;
  position: absolute;
  width: 100%;
  z-index: 1
}

.vuecal__now-line:before {
  border: 5px solid transparent;
  border-left-color: currentcolor;
  content: "";
  left: 0;
  position: absolute;
  top: -6px
}

.vuecal {
  box-shadow: inset 0 0 0 1px #00000014;
  height: 100%
}

.vuecal *,
.vuecal--has-touch :not(.vuecal__event-title--edit) {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none
}

.vuecal--has-touch :not(.vuecal__event-title--edit) {
  -webkit-touch-callout: none
}

.vuecal .clickable {
  cursor: pointer
}

.vuecal--drag-creating-event,
.vuecal--resizing-event {
  cursor: ns-resize
}

.vuecal--dragging-event {
  cursor: move;
  cursor: grabbing
}

.vuecal .dragging-helper {
  background: rgba(138, 190, 230, .8);
  border: 1px solid #61a9e0;
  height: 40px;
  position: absolute;
  width: 60px;
  z-index: 10
}

.vuecal--xsmall {
  font-size: .9em
}

.vuecal__flex {
  display: flex;
  flex-direction: row
}

.vuecal__flex[column] {
  flex: 1 1 auto;
  flex-direction: column
}

.vuecal__flex[grow] {
  flex: 1 1 auto;
  width: 100%
}

.vuecal__flex[wrap] {
  flex-wrap: wrap
}

.vuecal__split-days-headers.slide-fade--right-leave-active {
  display: none
}

.vuecal--week-numbers.vuecal--month-view .vuecal__split-days-headers {
  margin-left: 3em
}

.vuecal--day-view:not(.vuecal--overflow-x) .vuecal__split-days-headers {
  height: 2.2em;
  margin-left: 3em
}

.vuecal--day-view.vuecal--twelve-hour:not(.vuecal--overflow-x) .vuecal__split-days-headers {
  margin-left: 4em
}

.vuecal__split-days-headers .day-split-header {
  align-items: center;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  height: 100%;
  justify-content: center
}

.vuecal__split-days-headers .vuecal--day-view.vuecal--overflow-x.vuecal--sticky-split-labels .day-split-header {
  height: 1.5em
}

.vuecal__body {
  overflow: hidden;
  position: relative
}

.vuecal__all-day {
  flex-shrink: 0;
  margin-bottom: -1px;
  min-height: 1.7em
}

.vuecal__all-day-text {
  align-items: center;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  color: #999;
  display: flex;
  flex-shrink: 0;
  -webkit-hyphens: auto;
  hyphens: auto;
  justify-content: flex-end;
  padding-right: 2px;
  width: 3em
}

.vuecal__all-day-text span {
  font-size: .85em;
  line-height: 1.1;
  text-align: right
}

.vuecal--twelve-hour .vuecal__all-day>span {
  width: 4em
}

.vuecal__bg {
  -webkit-overflow-scrolling: touch;
  min-height: 60px;
  overflow: auto;
  overflow-x: hidden;
  position: relative;
  width: 100%
}

.vuecal--no-time .vuecal__bg {
  display: flex;
  flex: 1 1 auto;
  overflow: auto
}

.vuecal__week-numbers {
  flex-shrink: 0 !important;
  width: 3em
}

.vuecal__week-numbers .vuecal__week-number-cell {
  align-items: center;
  font-size: .9em;
  justify-content: center;
  justify-items: center;
  opacity: .4
}

.vuecal__scrollbar-check {
  bottom: 0;
  left: 0;
  overflow: scroll;
  position: absolute;
  right: 0;
  top: 0;
  visibility: hidden;
  z-index: -1
}

.vuecal__scrollbar-check div {
  height: 120%
}

.vuecal__time-column {
  flex-shrink: 0;
  height: 100%;
  width: 3em
}

.vuecal--twelve-hour .vuecal__time-column {
  font-size: .9em;
  width: 4em
}

.vuecal--overflow-x.vuecal--week-view .vuecal__time-column {
  box-shadow: 0 1px 1px #0000004d;
  margin-top: 2.8em
}

.vuecal--overflow-x.vuecal--week-view.vuecal--sticky-split-labels .vuecal__time-column {
  margin-top: 3.4em
}

.vuecal--overflow-x.vuecal--day-view.vuecal--sticky-split-labels .vuecal__time-column {
  margin-top: 1.5em
}

.vuecal__time-column .vuecal__time-cell {
  color: #999;
  font-size: .9em;
  padding-right: 2px;
  text-align: right
}

.vuecal__time-column .vuecal__time-cell-line:before {
  border-top: 1px solid hsla(0, 0%, 77%, .3);
  content: "";
  left: 0;
  position: absolute;
  right: 0
}

.vuecal__cells {
  margin: 0 1px 1px 0
}

.vuecal--overflow-x.vuecal--day-view .vuecal__cells {
  margin: 0
}

.vuecal--events-on-month-view.vuecal--short-events .vuecal__cells {
  width: 99.9%
}

.vuecal--overflow-x.vuecal--day-view .vuecal__cells,
.vuecal--overflow-x.vuecal--week-view .vuecal__cells {
  flex-wrap: nowrap;
  overflow: auto
}

.slide-fade--left-enter-active,
.slide-fade--left-leave-active,
.slide-fade--right-enter-active,
.slide-fade--right-leave-active {
  transition: .25s ease-out
}

.slide-fade--left-enter-from,
.slide-fade--right-leave-to {
  opacity: 0;
  transform: translate(-15px)
}

.slide-fade--left-leave-to,
.slide-fade--right-enter-from {
  opacity: 0;
  transform: translate(15px)
}

.slide-fade--left-leave-active,
.slide-fade--right-leave-active {
  height: 100%;
  position: absolute !important
}

.vuecal__title-bar .slide-fade--left-leave-active,
.vuecal__title-bar .slide-fade--right-leave-active {
  height: auto;
  left: 0;
  right: 0
}

.vuecal__heading .slide-fade--left-leave-active,
.vuecal__heading .slide-fade--right-leave-active {
  align-items: center;
  display: flex
}

.vuecal--green-theme .vuecal__cell-events-count,
.vuecal--green-theme .vuecal__menu {
  background-color: #42b983;
  color: #fff
}

.vuecal--green-theme .vuecal__title-bar {
  background-color: #e4f5ef
}

.vuecal--green-theme .vuecal__cell--current,
.vuecal--green-theme .vuecal__cell--today {
  background-color: #f0f0ff66
}

.vuecal--green-theme:not(.vuecal--day-view) .vuecal__cell--selected {
  background-color: #ebfff566
}

.vuecal--green-theme .vuecal__cell--selected:before {
  border-color: #42b98380
}

.vuecal--green-theme .vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal--green-theme .vuecal__cell-split--highlighted {
  background-color: #c3ffe180
}

.vuecal--green-theme .vuecal__arrow--highlighted,
.vuecal--green-theme .vuecal__today-btn--highlighted,
.vuecal--green-theme .vuecal__view-btn--highlighted {
  background-color: #88ecbf40
}

.vuecal--blue-theme .vuecal__cell-events-count,
.vuecal--blue-theme .vuecal__menu {
  background-color: #42a3b9cc;
  color: #fff
}

.vuecal--blue-theme .vuecal__title-bar {
  background-color: #00a5bc4d
}

.vuecal--blue-theme .vuecal__cell--current,
.vuecal--blue-theme .vuecal__cell--today {
  background-color: #f0f0ff66
}

.vuecal--blue-theme:not(.vuecal--day-view) .vuecal__cell--selected {
  background-color: #ebfdff66
}

.vuecal--blue-theme .vuecal__cell--selected:before {
  border-color: #73bfcc80
}

.vuecal--blue-theme .vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal--blue-theme .vuecal__cell-split--highlighted {
  background-color: #00a5bc0f
}

.vuecal--blue-theme .vuecal__arrow--highlighted,
.vuecal--blue-theme .vuecal__today-btn--highlighted,
.vuecal--blue-theme .vuecal__view-btn--highlighted {
  background-color: #42a3b933
}

.vuecal--rounded-theme .vuecal__weekdays-headings {
  border: none
}

.vuecal--rounded-theme .vuecal__cell,
.vuecal--rounded-theme .vuecal__cell:before {
  background: none;
  border: none
}

.vuecal--rounded-theme .vuecal__cell--out-of-scope {
  opacity: .4
}

.vuecal--rounded-theme .vuecal__cell-content {
  border: 1px solid transparent;
  border-radius: 30px;
  color: #333;
  flex-grow: 0;
  height: 30px;
  width: 30px
}

.vuecal--rounded-theme.vuecal--day-view .vuecal__cell-content {
  background: none;
  width: auto
}

.vuecal--rounded-theme.vuecal--year-view .vuecal__cell {
  width: 33.33%
}

.vuecal--rounded-theme.vuecal--year-view .vuecal__cell-content {
  width: 85px
}

.vuecal--rounded-theme.vuecal--years-view .vuecal__cell-content {
  width: 52px
}

.vuecal--rounded-theme .vuecal__cell {
  background-color: transparent !important
}

.vuecal--rounded-theme.vuecal--green-theme:not(.vuecal--day-view) .vuecal__cell-content {
  background-color: #f1faf7
}

.vuecal--rounded-theme.vuecal--green-theme:not(.vuecal--day-view) .vuecal__cell--today .vuecal__cell-content {
  background-color: #42b983;
  color: #fff
}

.vuecal--rounded-theme.vuecal--green-theme .vuecal--day-view .vuecal__cell--today:before {
  background-color: #42b9830d
}

.vuecal--rounded-theme.vuecal--green-theme:not(.vuecal--day-view) .vuecal__cell--selected .vuecal__cell-content {
  border-color: #42b983
}

.vuecal--rounded-theme.vuecal--green-theme .vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal--rounded-theme.vuecal--green-theme .vuecal__cell-split--highlighted {
  background-color: #c3ffe180
}

.vuecal--rounded-theme.vuecal--blue-theme:not(.vuecal--day-view) .vuecal__cell-content {
  background-color: #64b6ff33
}

.vuecal--rounded-theme.vuecal--blue-theme:not(.vuecal--day-view) .vuecal__cell--today .vuecal__cell-content {
  background-color: #8fb7e4;
  color: #fff
}

.vuecal--rounded-theme.vuecal--blue-theme .vuecal--day-view .vuecal__cell--today:before {
  background-color: #8fb7e41a
}

.vuecal--rounded-theme.vuecal--blue-theme:not(.vuecal--day-view) .vuecal__cell--selected .vuecal__cell-content {
  border-color: #61a9e0
}

.vuecal--rounded-theme.vuecal--blue-theme .vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal--rounded-theme.vuecal--blue-theme .vuecal__cell-split--highlighted {
  background-color: #00a5bc0f
}

.vuecal--date-picker .vuecal__title-bar {
  font-size: 1.2em
}

.vuecal--date-picker .vuecal__heading {
  font-weight: 500;
  height: 2.2em;
  opacity: .4
}

.vuecal--date-picker .vuecal__weekdays-headings {
  border: none
}

.vuecal--date-picker .vuecal__body {
  margin-left: 1px
}

.vuecal--date-picker .vuecal__cell,
.vuecal--date-picker .vuecal__cell:before {
  background: none;
  border: none
}

.vuecal--date-picker .vuecal__cell-content {
  border: 1px solid transparent;
  border-radius: 25px;
  flex-grow: 0;
  height: 26px;
  transition: background-color .2s cubic-bezier(.39, .58, .57, 1)
}

.vuecal--date-picker.vuecal--years-view .vuecal__cell-content {
  flex: 0;
  height: 24px;
  padding: 0 4px
}

.vuecal--date-picker.vuecal--year-view .vuecal__cell-content {
  flex: 0;
  padding: 0 15px
}

.vuecal--date-picker.vuecal--month-view .vuecal__cell-content {
  width: 26px
}

.vuecal--date-picker:not(.vuecal--day-view) .vuecal__cell-content:hover {
  background-color: #0000001a
}

.vuecal--date-picker:not(.vuecal--day-view) .vuecal__cell--selected .vuecal__cell-content {
  background-color: #42b982;
  color: #fff
}

.vuecal--date-picker:not(.vuecal--day-view) .vuecal__cell--current .vuecal__cell-content,
.vuecal--date-picker:not(.vuecal--day-view) .vuecal__cell--today .vuecal__cell-content {
  border-color: #42b982
}

.vuecal__cell-events-count,
.vuecal__menu {
  background-color: #42b983
}

.vuecal__title-bar {
  background-color: #e4f5ef
}

.vuecal__cell--current,
.vuecal__cell--today {
  background-color: rgba(240, 240, 255, .4)
}

.vuecal:not(.vuecal--day-view) .vuecal__cell--selected {
  background-color: rgba(235, 255, 245, .4)
}

.vuecal__cell--selected:before {
  border-color: rgba(66, 185, 131, .5)
}

.vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal__cell-split--highlighted {
  background-color: rgba(195, 255, 225, .5)
}

.vuecal__arrow.vuecal__arrow--highlighted,
.vuecal__view-btn.vuecal__view-btn--highlighted {
  background-color: rgba(136, 236, 191, .25)
}

.vuecal__view-btn {
  color: #fff !important
}

.vuecal__event.leisure {
  background-color: rgba(253, 156, 66, .9);
  border: 1px solid #e9882e;
  color: #fff
}

.vuecal__event.sport {
  background-color: hsla(0, 100%, 70%, .9);
  border: 1px solid #eb5252;
  color: #fff
}

.vuecal__event.duty {
  background-color: rgb(67 56 202/var(--tw-bg-opacity))
}

.vuecal__event.duty,
.vuecal__event.event {
  --tw-bg-opacity: 1;
  --tw-text-opacity: 1;
  color: rgb(255 255 255/var(--tw-text-opacity))
}

.vuecal__event.event {
  background-color: rgb(3 105 161/var(--tw-bg-opacity))
}

.vuecal__event.meet {
  --tw-bg-opacity: 1;
  --tw-text-opacity: 1;
  background-color: rgb(185 28 28/var(--tw-bg-opacity));
  color: rgb(255 255 255/var(--tw-text-opacity))
}
</style>