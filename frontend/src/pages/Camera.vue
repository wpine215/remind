<template>
  <q-page>

    <q-btn color="primary" label="Get Picture" @click="captureImage" />

    <img :src="imageSrc">

  </q-page>
</template>

<script>
export default {
  name: 'PageReminders',
  data () {
    return {
      imageSrc: ''
    }
  },
  methods: {
    captureImage () {
      navigator.camera.getPicture(
        data => { // on success
          this.imageSrc = `data:image/jpeg;base64,${data}`
        },
        () => { // on fail
          this.$q.notify('Could not access device camera.')
        },
        {
          quality: 50,
          destinationType: navigator.camera.DestinationType.DATA_URL,
          encodingType: navigator.camera.EncodingType.JPEG,
          MEDIATYPE: navigator.camera.MediaType.PICTURE,
          sourceType: navigator.camera.PictureSourceType.CAMERA,
          mediaType: navigator.camera.MediaType.PICTURE,
          cameraDirection: navigator.camera.Direction.BACK,
          targetWidth: 300,
          targetHeight: 400
        }
      )
    }
  }
}
</script>

<style>

</style>
