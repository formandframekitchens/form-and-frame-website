import { ServiceSelection } from "./service-selection";
import { kitchenChoices } from "../lib/kitchen-choices";

export function KitchenChoiceFlow() {
  return <ServiceSelection id="choose-installation" title="Choose your kitchen" label="Kitchen types and suppliers" choices={kitchenChoices} action="Explore kitchen" className="kitchen-selection" />;
}
