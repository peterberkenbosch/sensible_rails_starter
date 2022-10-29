import { application } from './application'

import controllers from "./**/*_controller.js"
controllers.forEach((controller) => {
  application.register(controller.name, controller.module.default)
})

import { Alert, Autosave, Dropdown, Modal, Tabs, Popover, Toggle, Slideover } from "tailwindcss-stimulus-components"
application.register('alert', Alert)
application.register('autosave', Autosave)
application.register('dropdown', Dropdown)
application.register('modal', Modal)
application.register('tabs', Tabs)
application.register('popover', Popover)
application.register('toggle', Toggle)
application.register('slideover', Slideover)

import ModalController from './modal_controller'
application.register('modal', ModalController)

import AnimatedNumber from 'stimulus-animated-number'
application.register('animated-number', AnimatedNumber)

import CharacterCounter from 'stimulus-character-counter'
application.register('character-counter', CharacterCounter)
