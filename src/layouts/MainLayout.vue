<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="absolute-center"> MyTasks </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer color>
      <q-tabs class="bg-secondary text-grey-7">
        <q-route-tab to="/" icon="format_list_bulleted" label="Todo list" />
        <q-route-tab to="/settings" icon="settings" label="Settings" />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="768"
      :width="250"
      show-if-above
      bordered
      class="bg-secondary"
    >
      <q-list>
        <q-item-label header> Navigation </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          class="text-grey-7"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Todo list",
    icon: "format_list_bulleted",
    link: "/",
  },
  {
    title: "Settings",
    icon: "settings",
    link: "/settings",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss">
@media screen and (min-width: 754px) {
  .q-footer {
    display: none;
  }
}

.q-drawer .q-router-link--exact-active {
  color: $primary !important;
}
</style>
