import { createAvatar } from "@dicebear/avatars";
import * as styles from "@dicebear/pixel-art-neutral";

export function createDicebearAvatar(seed) {
  return createAvatar(styles, {
    name: seed,
  });
}
