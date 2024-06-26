const { expect, browser, $ } = require('@wdio/globals')

describe('My Login application', () => {
    beforeEach (async() =>{
        await browser.url(`https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard`)
    })

    // it('open modal for adding doctor', async () => {
    //     await $(`[routerlink="/doctors"]`).click()
    //     await browser.pause(2000)
    //     await $(`.specialization-types button.e-control`).click()
    //     await browser.pause(2000)
    //     await expect($('ejs-dialog.new-doctor-dialog')).toBeDisplayed()

    // })

    it('add a new doctor', async () =>{
        await $(`[routerlink="/doctors"]`).click()
        await $(`.specialization-types button.e-control`).click()
        await $(`ejs-dialog.new-doctor-dialog`).waitForDisplayed()
        await $(`[name="Name"]`).setValue('Mark Smith')
        await $(`#DoctorMobile`).setValue('6265678909')
        await $(`[name="Email"]`).setValue('mark@gmail.com')
        await $(`[name="Education"]`).setValue('AUA')
        await browser.pause(2000)
        await $(`.button-container button.e-primary`).click()

        await expect($('ejs-dialog.new-doctor-dialog')).not.toBeDisplayed()
        await expect($('#Specialist_8').$('.name')).toHaveText('Dr. Mark Smith')
        await expect($('#Specialist_8').$('.education')).toHaveText('AUA')
    })

})