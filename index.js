const { Plugin } = require('powercord/entities')
let bebeu = false
module.exports = class Watertime extends Plugin {
  async startPlugin () {
    console.log('WaterTime iniciado.')
    setInterval(function () {
      powercord.api.notices.sendToast('pc-example-toast', {
        header: 'HIDRATAÇÃO WARNING!', // required
        content: 'WATERPOWER TIME!!!!!!!!!!!!',
        image: '',
        imageClass: 'bunda',
        type: 'info',
        timeout: 10e3,
        buttons: [{
          text: 'ok.', // required
          color: 'green',
          size: 'medium',
          look: 'outlined',
          onClick: () => {
            console.log('ok, água!')
            bebeu = true
          }
        }],
        callback: () => console.log('não água!')
      })
    }, 1000 * 60 * 60)
  }
}
