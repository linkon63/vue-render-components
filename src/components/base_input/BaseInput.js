import { h } from 'vue'
const initializationOfProps = ['modelValue', 'class', 'placeholder', 'label']
const initializationOfEmits = ['onUpdate']
export default {
  props: initializationOfProps,
  emits: initializationOfEmits,
  setup(props, { emit }) {
    const data = props.modelValue
    return () => [
      h(
        'div',
        {
          class: 'w-full'
        },
        [
          h(
            'label',
            {
              class: 'block mb-2 text-sm font-medium'
            },
            props.label ?? 'input-box-label'
          ),
          h('input', {
            class: props.class ?? 'default-class',
            placeholder: props.placeholder ?? 'Enter your text',
            name: props.name ?? 'input-box',
            ...inputPropertiesAndFunctionalities,
            value: data,
            onKeypress: (e) => {
              emit('onUpdate', e)
            }
          })
        ]
      )
    ]
  }
}

const inputPropertiesAndFunctionalities = {
  name: 'input-render'
}
