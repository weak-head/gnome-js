import { require as _require, startLoop } from "node-gtk";

const Gtk = _require("Gtk", "3.0");
startLoop();
Gtk.init();

const header = new Gtk.HeaderBar();
header.setTitle("Node-GTK");
header.setSubtitle("An app made with Node-GTK!");
header.setShowCloseButton(true);

const window = new Gtk.Window();
window.windowPosition = Gtk.WindowPosition.CENTER;
window.on("destroy", () => Gtk.mainQuit());
window.setDefaultSize(350, 70);
window.setTitlebar(header);
window.borderWidth = 10;

window.add(new Gtk.Button({ label: "Hello Node-GTK" }));
window.showAll();

Gtk.main();