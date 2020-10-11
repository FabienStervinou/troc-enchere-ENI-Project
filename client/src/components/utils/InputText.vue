<template>
  <div class="form-item">
    <label>
      {{ label }}
    </label>
    <input 
      v-bind="$attrs"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>

const TYPES = [
  'text',
  'password', 
  'email',
  'number', 
  'url', 
  'tel', 
  'search',
  'color',
  'date',
  'image',
  'file'
]

const includes = types => type => types.includes(type);

export default {
  name: 'InputText',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      validator (value) {
        const isValid = includes(TYPES)(value)
        if (!isValid) {
          console.warn(`allowed types are ${TYPES}`);
        }
        return isValid
      },
    },
  },
}
</script>

<style lang='scss' scoped>
  .form-item {
    background-color: #f1f1f1;
    margin-bottom: 15px;
    height: 65px;
    border-radius: 5px;

    label {
      padding: 5px 10px;
      font-size: 0.8em;
      height: min-content;
      width: min-content;
      white-space: nowrap;
      position: absolute;
    }

    input {
      height: calc(100% - 18px);
      width: calc(100% - 14px);
      background-color: transparent;
      position: relative;
      padding: 14px 0 0 10px;
      font-size: 1.3em;
      border: solid #e9e9e9 2px;
      border-radius: 5px;

      &:hover {
        cursor: pointer;
        border: solid $primary_color_lighter 2px;
      }

      &:focus {
        outline: none;
        border: solid $primary_color 2px;
      }
    }
  }
</style>