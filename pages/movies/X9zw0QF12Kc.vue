<template>
  <div>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/X9zw0QF12Kc"
      frameborder="0"
      allow="accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture"
      allowfullscreen></iframe>
    <div>
      <v-layout>
        <h2>サクラカゼ</h2>
        <v-spacer/>
        <v-btn icon>
          <v-icon color="yellow">mdi-star</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-layout>
    </div>
    <v-chip
      class="ma-2"
      color="#FFA4CF"
      label
    >
      <v-icon left>mdi-account-circle-outline</v-icon>
      さくらみこ
    </v-chip>
    <v-chip class="ma-2" label>tag1</v-chip>
    <v-chip class="ma-2" label>tag2</v-chip>
    <p class="text-justify">
      ここに動画の説明が入る。<br>
      ほげぴよ
    </p>
  </div>
</template>
<script>
</script>
<style>
</style>
