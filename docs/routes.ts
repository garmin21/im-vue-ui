import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

export const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "main",
        component: () =>
            import(/*main*/ "./main.vue").then((v) => {
                console.log(v, "---> 模块信息 <---");
                return v.default;
            })
    },
    {
        path: "/example",
        name: "example",
        redirect: "/example/upload",
        component: () =>
            import(/* example */ "./example.vue").then((v) => v.default),
        children: [
            {
                path: "upload",
                name: "upload",
                component: () =>
                    import(/* upload */ "../example/example-upload.vue").then(
                        (v) => v.default
                    )
            },
            {
                path: "image",
                name: "image",
                component: () =>
                    import(/* image */ "../example/example-image.vue").then(
                        (v) => v.default
                    )
            },
            {
                path: "switch",
                name: "switch",
                component: () =>
                    import(/* switch */ "../example/example-switch.vue").then(
                        (v) => v.default
                    )
            },
            {
                path: "message",
                name: "message",
                component: () =>
                    import(/* message */ "../example/example-message.vue").then(
                        (v) => v.default
                    )
            },
            {
                path: "button",
                name: "button",
                component: () =>
                    import(/* button */ "../example/example-button.vue").then(
                        (v) => v.default
                    )
            },
            {
                path: "input-number",
                name: "input-number",
                component: () =>
                    import(
                        /* input-number */ "../example/example-input-number.vue"
                    ).then((v) => v.default)
            },
            {
                path: "checkbox",
                name: "checkbox",
                component: () =>
                    import(
                        /* checkbox */ "../example/example-checkbox.vue"
                    ).then((v) => v.default)
            },
            {
                path: "collapse",
                name: "collapse",
                component: () =>
                    import(
                        /* collapse */ "../example/example-collapse.vue"
                    ).then((v) => v.default)
            },
            {
                path: "progress",
                name: "progress",
                component: () =>
                    import(
                        /* progress */ "../example/example-progress.vue"
                    ).then((v) => v.default)
            },
            {
                path: "tree",
                name: "tree",
                component: () =>
                    import(/* tree */ "../example/example-tree.vue").then(
                        (v) => v.default
                    )
            },
            {
                path: "toast",
                name: "toast",
                component: () =>
                    import(/* toast */ "../example/example-toast.vue").then(
                        (v) => v.default
                    )
            },
            {
                path: "date-picker",
                name: "date-picker",
                component: () =>
                    import(
                        /* date-picker */ "../example/example-date-picker.vue"
                    ).then((v) => v.default)
            },
            {
                path: "input",
                name: "input",
                component: () =>
                    import(/* input */ "../example/example-input.vue").then(
                        (v) => v.default
                    )
            },
            {
                path: "drawer",
                name: "drawer",
                component: () =>
                    import(/* drawer */ "../example/example-drawer.vue").then(
                        (v) => v.default
                    )
            },
            {
                path: "dropdown",
                name: "dropdown",
                component: () =>
                    import(
                        /* dropdown */ "../example/example-dropdown.vue"
                    ).then((v) => v.default)
            }
        ]
    }
];

const router = new VueRouter({
    routes
});

export default router;
