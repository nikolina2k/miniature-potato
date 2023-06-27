<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      autofocus
      :rules="[(val) => !!val || 'This field is required']"
      v-model="localName"
      label="Task name"
      class="col"
    >
      <template v-slot:append>
        <q-icon
          v-if="name"
          name="close"
          @click="localName = ''"
          class="cursor-pointer"
        />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ["name"],
  computed: {
    localName: {
      get() {
        return this.name;
      },
      set(newValue) {
        this.$emit("changeName", newValue);
      },
    },
  },
};
</script>

<style lang="scss"></style>
