<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>

<style>
ion-spinner {
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
}
</style>
