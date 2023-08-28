/**
 * Contains the Event name definitions that is used by the constructed EventBus
 * singleton: e.g. (import events from './Eventbus').
 */

// Signal that the Kernel has started.
export const KERNEL_START = "thundershock.kernel:start";

export const PUBLISHER_GET = "thundershock.publisher.get";
export const PUBLISHER_SET = "thundershock.publisher.set";

// Signal when a Service class is constructed.
export const SERVICE_PRELOAD = "thundershock.service:preload";

export const SCENE_CHANGE = "thundershock.scene:change";