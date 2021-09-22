<template>
  <div class="mb-4 listing">
    <router-link :to="{name: 'House', params: { houseId: house.id }}">
      <div class="card selectable">
        <img :src="house.imgUrl" alt="listing image" class="rounded">
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
            <span>{{ house.bedrooms }} Bedroom {{ house.bathrooms }} Bath</span>
            <span>$ {{ house.price }}</span>
          </h5>
          <p>{{ house.description }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { House } from '../models/House'
export default {
  props: {
    house: { type: House, required: true }
  },
  setup(props) {
    return {

    }
  }
}
</script>

<style>

</style>
