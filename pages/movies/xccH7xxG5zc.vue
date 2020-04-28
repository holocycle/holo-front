<template>
  <div>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/xccH7xxG5zc?rel=0&start=2799&end=2871"
      frameborder="0"
      allow="accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture"
      allowfullscreen></iframe>
    <v-layout>
      <h2>このアプリのコンセプトを説明した動画</h2>
      <v-spacer/>
      <v-btn icon>
        <v-icon color="yellow">mdi-star</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-layout>
    <v-chip
      class="ma-2"
      color="#F7002F"
      label
    >
      <v-icon left>mdi-account-circle-outline</v-icon>
      宝鐘マリン
    </v-chip>
    <v-chip class="ma-2" label>tag1</v-chip>
    <v-chip class="ma-2" label>tag2</v-chip>
  </div>
</template>
