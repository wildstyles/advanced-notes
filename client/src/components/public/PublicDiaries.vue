<template>
  <v-layout column align-center fill-height>

    
      <panel title="Diaries" class="diary-panel">
        <div class="diary-item">
            <div class="diary-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa inventore natus aspernatur neque, officiis vel dicta expedita molestiae saepe esse suscipit cupiditate maxime, ea at assumenda impedit est. Quas, dicta.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa inventore natus aspernatur neque, officiis vel dicta expedita molestiae saepe esse suscipit cupiditate maxime, ea at assumenda impedit est. Quas, dicta
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa inventore natus aspernatur neque, officiis vel dicta expedita molestiae saepe esse suscipit cupiditate maxime, ea at assumenda impedit est. Quas, dicta
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa inventore natus aspernatur neque, officiis vel dicta expedita molestiae saepe esse suscipit cupiditate maxime, ea at assumenda impedit est. Quas, dicta.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa inventore natus aspernatur neque, officiis vel dicta expedita molestiae saepe esse suscipit cupiditate maxime, ea at assumenda impedit est. Quas, dicta
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa inventore natus aspernatur neque, officiis vel dicta expedita molestiae saepe esse suscipit cupiditate maxime, ea at assumenda impedit est. Quas, dicta
            </div>
            <v-btn color="primary" dark>read all</v-btn>
        </div>

        <div class="diary-item">
            <div class="diary-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa inventore natus aspernatur neque, officiis vel dicta expedita molestiae saepe esse suscipit cupiditate maxime, ea at assumenda impedit est. Quas, dicta.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa inventore natus aspernatur neque, officiis vel dicta expedita molestiae saepe esse suscipit cupiditate maxime, ea at assumenda impedit est. Quas, dicta
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa inventore natus aspernatur neque, officiis vel dicta expedita molestiae saepe esse suscipit cupiditate maxime, ea at assumenda impedit est. Quas, dicta
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa inventore natus aspernatur neque, officiis vel dicta expedita molestiae saepe esse suscipit cupiditate maxime, ea at assumenda impedit est. Quas, dicta.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa inventore natus aspernatur neque, officiis vel dicta expedita molestiae saepe esse suscipit cupiditate maxime, ea at assumenda impedit est. Quas, dicta
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa inventore natus aspernatur neque, officiis vel dicta expedita molestiae saepe esse suscipit cupiditate maxime, ea at assumenda impedit est. Quas, dicta
            </div>
            <v-btn color="primary" dark>read all</v-btn>
        </div>
</panel>
  


  </v-layout>
</template>

<style lang="scss" scoped>

$font-size: 16px;
$line-height: 1.4;
$lines-to-show: 5;

.diary {
    &-item {
        background-color: #455A64;
        color: #ccc;
        padding: 15px 30px;
        margin-bottom: 10px;

    }
  &-panel {
    width: 75%;
  }
  &-body {
    display: block;
    /* Fallback for non-webkit */
    display: -webkit-box;
    max-width: 100%;
    height: $font-size*$line-height*$lines-to-show;
    /* Fallback for non-webkit */
    margin: 0 auto;
    font-size: $font-size;
    line-height: $line-height;
    -webkit-line-clamp: $lines-to-show;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}






</style>
