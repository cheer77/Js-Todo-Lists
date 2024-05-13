import { BaseHelpers } from "./helpers/base-helpers";
import switchTheme from "./modules/theme-switcher";
import createHeaderSection from "./modules/header/header";

BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

// createHeaderSection();

switchTheme();
