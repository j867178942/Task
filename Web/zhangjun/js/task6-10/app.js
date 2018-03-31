var app = angular.module("myApp",["ui.router","ui.bootstrap","ngAnimate","ng.ueditor","oc.lazyLoad"]);
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //更改url格式配置为html5，去掉#号
    $locationProvider.html5Mode(true);
    $urlRouterProvider.when("/","/login");  // 设置默认页面
    $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "pages/login.html",
            controller: "loginCtrl",
            resolve: {
                loadMyFile: ["$ocLazyLoad",function ($ocLazyLoad) {
                    return $ocLazyLoad.load(["js/login.js","css/login.css"])
                }]
            }
        })
        .state("home",{
            url: "/home",
            templateUrl: "pages/home.html",
            controller: "homeCtrl",
            resolve: {
                loadMyFile: ["$ocLazyLoad",function ($ocLazyLoad) {
                    return $ocLazyLoad.load(["js/constant.js","js/home.js","css/home.css"])
                }]
            }
        })
        .state("home.article_list",{
            url: "/article_list?title&author&type&status&page&size&startAt&endAt",
            templateUrl: "pages/article_list.html",
            controller: "listCrtl",
            resolve: {
                loadMyFile: ["$ocLazyLoad",function ($ocLazyLoad) {
                    return $ocLazyLoad.load(["js/filter.js","js/list.js"])
                }]
            }
        })
        .state("home.article_detail",{
            url: "/article_detail/:id",
            templateUrl: "pages/article_detail.html",
            controller: "detailCtrl",
            resolve: {
                loadMyFile: ["$ocLazyLoad",function ($ocLazyLoad) {
                    return $ocLazyLoad.load(["js/directive.js","js/detail.js"])
                }]
            }
        });
})