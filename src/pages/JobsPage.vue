<template>
  <div class="container-fluid px-0">
    <div class="row py-2 bg-dark mb-4 top-bar">
      <div class="col-12 text-end">
        <button class="btn text-success lighten-30 selectable" data-bs-toggle="modal" data-bs-target="#car-form">
          Add a Listing
        </button>
      </div>
    </div>
    <div class="row">
      <!-- REVIEW PROPS -->
      <Job v-for="job in jobs" :key="job.id" :job="job" class="col-lg-3" />
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import { jobsService } from '../services/JobsService'
export default {
  setup() {
    onMounted(async() => {
      await jobsService.getJobs()
    })
  }
}
</script>

<style>

</style>
