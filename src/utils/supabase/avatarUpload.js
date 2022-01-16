import { createDicebearAvatar } from "../createDicebearAvatar";
import { SUPABASE_IMG_STORAGE_OBJECT } from "../../consts";

export async function supabaseUploadAvatarImage(userType, username, supabase) {
  const supabaseAvatarImgRes = await supabase.storage
    .from(SUPABASE_IMG_STORAGE_OBJECT)
    .upload(`${userType}/${username}/avatar.svg`, createDicebearAvatar(username), {
      contentType: "image/svg+xml",
    });

  return supabaseAvatarImgRes;
}
