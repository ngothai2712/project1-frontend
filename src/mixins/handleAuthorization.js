import Vue from 'vue'
import TokenService from '@/helpers/token'

Vue.mixin({
    methods: {
        isAdmin() {
            const userRoles = TokenService.getUser()?.role || 'guest'
            return userRoles === 'admin'
        },
    },
})
