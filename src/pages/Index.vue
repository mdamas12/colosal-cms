<template>
  <q-page class="row items-center justify-evenly">
    <div>
      
    </div>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models'
import ExampleComponent from 'components/CompositionComponent.vue'
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent },
  setup () {
    const articles = [
      {
        article: 'La experiencia de usuario es todo. Siempre ha sido así, pero sigue siendo poco valorada y casi no invierten en ésta. Si no sabes de diseño basado en el usuario, estúdialo. Contrata a personas que sepan hacerlo. Obsesiónate con eso. Vívelo, respíralo e invita a bordo a toda tu empresa',
        author : 'Evan Williams, cofundador de Twitter.' 
      },
      {
        article: 'Ningún corte de crecimiento, idea brillante de marketing o equipo de ventas puede salvarte a la larga si no tienes un producto lo suficientemente bueno',
        author : 'Sam Altman, presidente de Y Combinator y cofundador de Loopt' 
      },
      {
        article: 'El producto que gana es el que lleva a los consumidores al futuro, no el que requiera de un salto gigante',
        author : 'Aaron Levie, cofundador de Box' 
      },
      {
        article: 'El último 10 por ciento que se necesita para lanzar algo requiere de la misma energía que usaste en el primer 90 por ciento',
        author : 'Rob Kalin, cofundador de Etsy' 
      },
      {
        article: 'Los errores no pondrán fin a tu negocio. Si eres ágil y estás dispuesto a escuchar críticas constructivas, tendrás éxito al aprender y evolucionar',
        author : 'Meridith Valiando Rojas, cofundadora y CEO de DigiTour Media' 
      }
    ]
    return { articles }
  }
})
</script>
