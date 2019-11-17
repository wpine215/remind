<template>
    <div class="q-pa-md row items-start q-gutter-md">
        <div class = "q-gutter-md">
            <div class = "cursor-pointer">
                {{Ready}}
                <q-popup-edit v-model="label" content-class="bg-accent text-white">
                    <q-form
                        @submit = "onSubmit"
                        @reset = "onReset"
                        class = "q-gutter-md"
                    >
                        <q-checkbox v-model="teal" label="Ace of Clubs" color="teal" />
                        <q-checkbox v-model="orange" label="5 of Hearts" color="orange" />
                        <q-checkbox v-model="red" label="4 of Spades" color="red" />
                        <q-checkbox v-model="cyan" label="8 of Diamonds" color="cyan" />

                        <q-checkbox keep-color v-model="teal" label="4 of Clubs" color="teal" />
                        <q-checkbox keep-color v-model="orange" label="King of Hearts" color="orange" />
                        <q-checkbox keep-color v-model="red" label="Ace of Diamonds" color="red" />
                        <q-checkbox keep-color v-model="cyan" label="Queen of Hearts" color="cyan" />

                        <div>
                            <q-btn label="Submit" type="submit" color="primary"/>
                            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                        </div>
                    </q-form>
                </q-popup-edit>
            </div>
        </div>
        <!-- <q-card class="my-card"> -->
        <q-card class="q-pa-md">
            <q-card-section>
                <span class="card__suit card__suit--top">♣</span><br>
                <span class="card__number">A</span><br>
                <span class="card__suit card__suit--bottom">♣</span>
            </q-card-section>
        </q-card>
        <q-card class="q-pa-md">
            <q-card-section>
                <span class="card__suit card__suit--top">♦</span><br>
                <span class="card__number">8</span><br>
                <span class="card__suit card__suit--bottom">♦</span>
            </q-card-section>
        </q-card>
        <q-card class="q-pa-md">
            <q-card-section>
                <span class="card__suit card__suit--top">♠</span><br>
                <span class="card__number">4</span><br>
                <span class="card__suit card__suit--bottom">♠</span>
            </q-card-section>
        </q-card>
        <q-card class="q-pa-md">
            <q-card-section>
                <span class="card__suit card__suit--top">♥</span><br>
                <span class="card__number">Q</span><br>
                <span class="card__suit card__suit--bottom">♥</span>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'PageExercises'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
