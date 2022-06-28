<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col
                    v-for="producto in info" :key="producto._id"
                    xs="10"
                    sm="6"
                    md="3"
                >
                    <v-card
                        class="mx-auto"
                        max-width="370"
                    >
                        <v-img
                            :src= producto.imagen
                            height="200px"
                        ></v-img>

                        <v-card-title>
                            {{ producto.nombre }}
                        </v-card-title>
                        <v-card-subtitle>
                            {{ producto.precio }}
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-btn
                                color="orange lighten-2"
                                text
                            >
                                Añadir carrito
                            </v-btn>
                        </v-card-actions>
                        <v-card-actions>
                            <v-btn
                                color="orange lighten-2"
                                text
                            >
                                Descripcion
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                icon
                                @click="show = !show"
                            >
                                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                            </v-btn>
                        </v-card-actions>
                        <v-expand-transition>
                            <div v-show="show">
                                <v-divider></v-divider>
                                <v-card-text>
                                    {{ producto.nombre }}
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
<script>
import axios from "axios";
export default {
    data: () => ({
        show: false,
        info:[],
    }),
    mounted () {
        axios
            .get('http://127.0.0.1:8000/vueproducto')
            .then(response => (this.info = response.data))
    }
}
</script>

