import "@hotwired/turbo-rails"

import "../controllers"

import.meta.globEager('../../assets/images/**/*');
import.meta.globEager('../../assets/fonts/**/*');

import * as Turbo from '@hotwired/turbo'

console.log('Vite ⚡️ Rails')

Turbo.start()
