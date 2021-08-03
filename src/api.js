import { google } from 'googleapis';
import credentials from '../credentials.json';

import token from '../token.json';

const SHEET_ID = '1UzW6vXIS0G4xI7H_9rogG_xT_Yzb2EJSwKyXpVuVMDE';

export async function getAllProducts() {
  try {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    oAuth2Client.setCredentials(token);

    const data = await getData(oAuth2Client);

    return data;
  } catch (err) {
    console.log(err);
  }
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
async function getData(auth) {
  const sheets = google.sheets({ version: 'v4', auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: 'produtos'
  })

  const data = response.data.values;

  if (data.length)
    return data;
}

export async function getCategories() {
  try {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    oAuth2Client.setCredentials(token);

    const data = await _getCategories(oAuth2Client);

    return data;
  } catch (err) {
    console.log(err);
  }
}

async function _getCategories(auth) {
  const sheets = google.sheets({ version: 'v4', auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: 'categorias'
  })

  const data = response.data.values;

  if (data.length)
    return data;
}

export async function getBannerImages() {
  try {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    oAuth2Client.setCredentials(token);

    const data = await _getBannerImages(oAuth2Client);

    return data;
  } catch (err) {
    console.log(err);
  }
}

async function _getBannerImages(auth) {
  const sheets = google.sheets({ version: 'v4', auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: 'banner_site'
  })

  const data = response.data.values;

  if (data.length)
    return data;
}
