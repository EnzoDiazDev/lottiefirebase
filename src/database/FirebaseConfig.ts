export default class FirebaseConfig {
    public readonly type = "service_account";
    public readonly project_id:string; //set as constant
    public readonly private_key_id:string;
    public readonly private_key:string;
    public readonly client_email:string; //set as constant
    public readonly client_id:string; //set as constant
    public readonly auth_uri = "https://accounts.google.com/o/oauth2/auth";
    public readonly token_uri = "https://oauth2.googleapis.com/token";
    public readonly auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
    public readonly client_x509_cert_url:string; //set as constant

    constructor(private_key_id:string, private_key:string){
        this.private_key_id = private_key_id;
        this.private_key = private_key;
    }
}
