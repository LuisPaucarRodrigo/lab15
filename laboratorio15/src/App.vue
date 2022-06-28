<template>
    <v-app id="inspire">
        <v-navigation-drawer
            v-model="drawer"
            app>
            <v-system-bar></v-system-bar>
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                    </v-list-item-avatar>
                </v-list-item>

                <v-list-item link @click="profile()">
                    <v-list-item-content>
                        <v-list-item-title class="text-h6">
                            John Leider
                        </v-list-item-title>
                        <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list>
                <v-list-group
                    :value="false"
                    prepend-icon="mdi-account-circle"
                >
                    <template v-slot:activator>
                        <v-list-item-title>Productos</v-list-item-title>
                    </template>
                    <v-list-item
                        link
                    >
                        <v-list-item-title>Niñas</v-list-item-title>
                        <v-list-item-icon>
                            <v-icon>mdi-lock</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                    <v-list-item
                        link
                    >
                        <v-list-item-title>Niños</v-list-item-title>
                        <v-list-item-icon>
                            <v-icon>mdi-lock</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list-group>
                <v-list
                    nav
                >
                    <v-list-item-group>
                        <v-list-item
                            @click="shopping()"
                        >
                            <v-list-item-icon>
                                <v-icon>mdi-cart</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Carrito de Compras</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-cart</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Cerrar Sesion</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title @click="productos()">Mi Pequeñito</v-toolbar-title>
        </v-app-bar>
        <router-view></router-view>
    </v-app>
</template>

<script>
import router from "@/router";
export default {
    data: () => ({ drawer: ""}),
    methods:{
        shopping(){
            router.push('/carritocompras');
        },
        profile(){
            router.push('/perfil');
        },
        productos(){
            router.push('/productos');
        }
    },
}
</script>
