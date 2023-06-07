import { google } from 'googleapis';
import { Row, formatSheetData } from '@/utils/formatSheetData';

import credentials from '../config/credentials.json';
import token from '../config/token.json';

class SheetsService {
  private sheetId = '1UzW6vXIS0G4xI7H_9rogG_xT_Yzb2EJSwKyXpVuVMDE';
  private token = token;
  private credentials = credentials;
  private auth: any = {};

  constructor() {
    this._init();
  }

  private _init() {
    try {
      const {
        client_secret: clientSecret,
        client_id: clientId,
        redirect_uris: redirectUris,
      } = this.credentials.installed;

      const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUris[0]);

      oAuth2Client.setCredentials(this.token);
      this.auth = oAuth2Client;
    } catch (error) {
      throw new Error('Erro na autorização do Google Sheets');
    }
  }

  public async getRange(range: string): Promise<any> {
    const sheets = google.sheets({ version: 'v4', auth: this.auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: this.sheetId,
      range,
    });

    return formatSheetData(response.data.values as Row[]);
  }
}

export default new SheetsService();
