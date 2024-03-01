import { h } from 'vue'
interface Props {
  modelValue: string
  placeholder: string
  class: string
  label: string
  name: string
}
const initializationOfProps: Props = {
  modelValue: 'modelValue',
  placeholder: 'placeholder',
  class: 'class',
  label: 'label',
  name: 'name'
}
const initializationOfEmits: string[] = ['onUpdate']
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
