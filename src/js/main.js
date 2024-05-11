import { BaseHelpers } from "./helpers/base-helpers";
import createHeaderSection from "./modules/header/header";

BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

createHeaderSection();
