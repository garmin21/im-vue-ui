import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

export const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "main",
        component: () =>
            import(/*main*/ "./main.vue").then((m) => {
                console.log(m, "---> 模块信息 <---");
                return m.default;
            })
    },
    {
        path: "/example",
        name: "example",
        component: () =>
            import(/* example */ "./example.vue").then((m) => m.default),
        children: [
            {
                path: "upload",
                name: "upload",
                component: () =>
                    import(/* upload */ "../example/example-upload.vue").then(
                        (m) => m.default
                    )
            },
            {
                path: "image",
                name: "image",
                component: () =>
                    import(/* image */ "../example/example-image.vue").then(
                        (m) => m.default
                    )
            },
            {
                path: "switch",
                name: "switch",
                component: () =>
                    import(/* switch */ "../example/example-switch.vue").then(
                        (m) => m.default
                    )
            },
            {
                path: "message",
                name: "message",
                component: () =>
                    import(/* message */ "../example/example-message.vue").then(
                        (m) => m.default
                    )
            },
            {
                path: "button",
                name: "button",
                component: () =>
                    import(/* button */ "../example/example-button.vue").then(
                        (m) => m.default
                    )
            },
            {
                path: "input-number",
                name: "input-number",
                component: () =>
                    import(
                        /* input-number */ "../example/example-input-number.vue"
                    ).then((m) => m.default)
            }
        ]
    }
];

const router = new VueRouter({
    routes
});

export default router;
