
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {wait}                 from '@spriteful/utils/utils.js';
import htmlString             from './icon-to-spinner.html';
import '@spriteful/app-icons/app-icons.js';
import '@polymer/paper-spinner/paper-spinner-lite.js';
import '@polymer/iron-icon/iron-icon.js';


class SpritefulIconToSpinner extends PolymerElement {
  static get is() { return 'icon-to-spinner'; }

  static get template() {
    return html([htmlString]);
  }


  static get properties() {
    return {

      icon: String

    };
  }


  __computeIcon(str) {
    return `app-icons:${str}`;
  }


  async startSpinner() {
    this.$.icon.classList.add('icon-to-spinner');
    await wait(300);
    this.$.spinner.classList.remove('hide-spinner');
    this.$.spinner.active = true;
  }


  async stopSpinner() {
    this.$.spinner.classList.add('hide-spinner');
    await wait(200);
    this.$.icon.classList.remove('icon-to-spinner');
    this.$.spinner.active = false;
  }
  
}

window.customElements.define(SpritefulIconToSpinner.is, SpritefulIconToSpinner);
