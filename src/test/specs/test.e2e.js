const { expect, browser, $ } = require('@wdio/globals')
const DashboardPage = require('../../po/pages/dashboard.page');
const DoctorsPage =  require('../../po/pages/doctors.page');

const dashboardPage = new DashboardPage()
const doctorsPage = new DoctorsPage()

describe('My Login application', () => {
    beforeEach (async() =>{
        await dashboardPage.open()
    })

    it('open modal for adding doctor', async () => {
        await dashboardPage.sideMenu.item('doctors').click()
        await doctorsPage.doctorListHeader.addNewDoctorButton.click()
        await expect(doctorsPage.addDoctorModal.rootElement).toBeDisplayed()

    })

    it('add a new doctor', async () =>{
        await dashboardPage.sideMenu.item('doctors').click()
        await $(`.specialization-types button.e-control`).click()
        await doctorsPage.addDoctorModal.rootElement.waitForDisplayed()
        await $(`[name="Name"]`).setValue('Mark Smith')
        await $(`#DoctorMobile`).setValue('6265678909')
        await $(`[name="Email"]`).setValue('mark@gmail.com')
        await $(`[name="Education"]`).setValue('AUA')
        await browser.pause(2000)
        await $(`.button-container button.e-primary`).click()

        await expect(doctorsPage.addDoctorModal.rootElement).not.toBeDisplayed()
        await expect($('#Specialist_8').$('.name')).toHaveText('Dr. Mark Smith')
        await expect($('#Specialist_8').$('.education')).toHaveText('AUA')
    })

})

