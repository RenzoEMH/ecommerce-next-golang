import { Amplify } from "aws-amplify";

export function initAmplify() {
  Amplify.configure({
    aws_cognito_region: "us-east-1",
    aws_user_pools_id: "us-east-1_oyqNiTr0t",
    aws_user_pools_web_client_id: "5n9kbhmiqrupjker8tiu4b7r5e",
    aws_cognito_identity_pool_id:
      "us-east-1:e23f412c-59af-41b4-88b4-e9ad6acfdbc5",
  });
}
