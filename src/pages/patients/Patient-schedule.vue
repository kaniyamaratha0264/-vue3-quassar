<template>
  <div class="q-pa-md">
    <v-container fluid class="layout grid-list-xl">
        <v-row class="overflow-x-hidden" no-gutters>
            <div class="d-custom-flex pa-4 w-100">
                <div class="welcome-message">
                    <h6>Patient Schedule Page</h6>
                    <!-- <p>Here’s what’s happening with your store this week.</p> -->
                </div>
                <div class="ml-auto font-weight-bold text-right" id="datetime"/>
            </div>
        </v-row>
    </v-container>
  </div>
</template>

<script>

 export default {
    name: 'PatientSchedulePage',
  }

</script>