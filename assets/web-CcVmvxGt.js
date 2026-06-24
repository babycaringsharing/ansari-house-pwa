import {
  W as a
} from "./index-CMSMpQKi.js";
import "./vendor-react-Co1__6Wa.js";
import "./vendor-dexie-BBE5do0Y.js";
import "./vendor-icons-CtWdggOv.js";
class s extends a {
  async canShare() {
    return typeof navigator > "u" || !navigator.share ? {
      value: !1
    } : {
      value: !0
    }
  }
  async share(e) {
    if (typeof navigator > "u" || !navigator.share) throw this.unavailable("Share API not available in this browser");
    return await navigator.share({
      title: e.title,
      text: e.text,
      url: e.url
    }), {}
  }
}
export {
  s as ShareWeb
};
