import { h } from 'vue'
import { Props } from './types'
import { initializationOfEmits, initializationOfProps } from './initialization'

export default {
  props: [
    initializationOfProps.modelValue,
    initializationOfProps.placeholder,
    initializationOfProps.class,
    initializationOfProps.label
  ],
  emits: initializationOfEmits,
  setup(props: Props, { emit }) {
    const data: string = props.modelValue
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
            value: data,
            onKeypress: (e: KeyboardEvent): void => {
              emit('onUpdate', e)
            }
          })
        ]
      )
    ]
  }
}
