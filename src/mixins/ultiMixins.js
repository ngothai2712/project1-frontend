import Vue from 'vue'
import get from 'lodash/get'

Vue.mixin({
    methods: {
        // formatDate(date) {
        //     if (date) {
        //         return moment(date).format('YYYY-MM-DD')
        //     }
        //     return ''
        // },
        // formatScore(score) {
        //     return +score === 0 ? 0 : (+score).toFixed(2)
        // },
        getLodash(data, value, defaultValue) {
            return get(data, value, defaultValue)
        },
        // async showConfirmMessage(
        //     title: string,
        //     message: string,
        //     cancelText = i18n.t('layout.common.cancel'),
        //     confirmText = i18n.t('layout.common.confirm'),
        // ) {
        //     const confirm = await this.$swal({
        //         icon: 'warning',
        //         title: title,
        //         text: message,
        //         showCancelButton: true,
        //         cancelButtonText: cancelText,
        //         confirmButtonText: confirmText,
        //     })
        //     return !!confirm?.value
        // },
        // async showSuccessMessage(message: string) {
        //     await this.$swal({
        //         icon: 'success',
        //         title: '',
        //         text: message,
        //     })
        //     return false
        // },
        //
        // async showErrorMessage(message: string) {
        //     await this.$swal({
        //         icon: 'error',
        //         title: '',
        //         text: message,
        //     })
        // },
        // convertDate(startDate, endDate) {
        //     let startDateFormatHour = moment(startDate).format('YYYY-MM-DD 00:00:00')
        //     let endDateFormatHour = moment(endDate).format('YYYY-MM-DD 23:59:59')
        //     startDateFormatHour = moment(startDateFormatHour)
        //         .utc()
        //         .format('YYYY-MM-DD HH:mm:ss')
        //     endDateFormatHour = moment(endDateFormatHour)
        //         .utc()
        //         .format('YYYY-MM-DD HH:mm:ss')
        //     return [startDateFormatHour, endDateFormatHour]
        // },
    },
})
