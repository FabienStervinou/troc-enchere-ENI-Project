<template>
  <div class="form-item">
    <label>
      {{ label }}
    </label>
    <input 
<<<<<<< HEAD
      v-bind="$attrs"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
=======
    
      :value="value"
      @input="$emit('update', $event.target.value)"
>>>>>>> 8829c99d957b43281a71d2d4c73b7f4c704532d6
    >
  </div>
</template>

<script>

const TYPES = [
<<<<<<< HEAD
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
=======
  'text', 
  'password', 
  'email', 
  'number', 
  'url', 
  'tel', 
  'search',  
  'color'
>>>>>>> 8829c99d957b43281a71d2d4c73b7f4c704532d6
]

const includes = types => type => types.includes(type);

export default {
  name: 'InputText',
<<<<<<< HEAD
=======
  inheritAttrs: false,
>>>>>>> 8829c99d957b43281a71d2d4c73b7f4c704532d6
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
<<<<<<< HEAD
  },
}
</script>

<style lang='scss' scoped>
=======
},
  model: {
    prop: 'value',
    event: 'update'
  }
}
</script>

<style lang=scss scoped>
>>>>>>> 8829c99d957b43281a71d2d4c73b7f4c704532d6
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
<<<<<<< HEAD
      height: calc(100% - 18px);
      width: calc(100% - 14px);
      background-color: transparent;
      position: relative;
      padding: 14px 0 0 10px;
=======
      height: calc(100% - 14px);
      width: calc(100% - 14px);
      background-color: transparent;
      position: relative;
      padding: 10px 0 0 10px;
>>>>>>> 8829c99d957b43281a71d2d4c73b7f4c704532d6
      font-size: 1.3em;
      border: solid #e9e9e9 2px;
      border-radius: 5px;

      &:hover {
<<<<<<< HEAD
        cursor: pointer;
        border: solid $primary_color_lighter 2px;
=======
        cursor: default;
>>>>>>> 8829c99d957b43281a71d2d4c73b7f4c704532d6
      }

      &:focus {
        outline: none;
        border: solid $primary_color 2px;
      }
    }
  }
</style>