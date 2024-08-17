<div ref="el" class="test_react"></div>

<script setup>
  import { onMounted, ref } from 'vue'
  import { createElement } from 'react'
  import { createRoot  } from 'react-dom/client'
  import { Button } from 'organizational-ui'

  const el = ref(null)
  onMounted(() => {
    const root = createRoot(el.value)
    root.render(createElement(Button, {}, null))
  })

</script>