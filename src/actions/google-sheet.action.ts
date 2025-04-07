"use server";

import { google } from "googleapis";

import { formatDateTime } from "@/lib/utils";
import dayjs from "dayjs";
import { GoogleAuth } from "google-auth-library";

const credentials = {
    type: "service_account",
    project_id: "sync-positive",
    private_key_id: "2cedcd4e1f0df8a5fcdb075d9c4fa8e35a1993fd",
    private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDaXZSchioY3yfE\nr4nYcd6IM4/knWK20UgQzuWqvaYTmYr/7Rnsc8oxHzXzzx53nJXgI3ddkHY/LBv/\n06JivtllBqFtki8b74emv0gmRb9GR4ZU+F2trYQIhxijsodWVnqLaPqg5CP1N2ko\n7SgcbKCe97mYnjlT0F2eb6Pjb9L6urayrn/cH+HhUB2LPvUAcf4jVTjA5hHMUIUy\nxc6gH0ce0pGRX/J/FDNe9fmp6Zjlf1W+IW2eNnuK4Bq2WSzxXY45yyp5KOhVcQ0o\nDUtMV/cUDk3YqR95I8qw3Dd4+KbaVYK6K9CcUDaDQx1eZEnFHKuccqwvfKsVB76N\nuxS2BV3vAgMBAAECggEAGN7D+x3Gs/rP3zVfnZtpIm8Tn5CTT8oUi0wyg9iXY9pp\ne+OHv9KiP9JTr+yHhkz7FEJF0+NiVv3m7yNYoSbRFhIEFw7UDGT4DgmcJeEXZgw7\nDvi98UwhYmKXRPxOMLWnEwiw/tvCV/6THLpXXAFn5nhwFs3yg+ASluW/2eVVt1Y7\nIYr7EXBJyVIC6aoyWM7HBkGWs3y0YOx24zszZJX9uVapvNnopry6AfZ1KwZC0bk2\nxa6CCmIA2UePfnXsUvo/Y8hhn2f0jDy3xXvf4PJTlh0mlCaVLJsNQMWDubnRk2IV\n2H5mdAuYqvl8pHvFYVB3zuzne/pfJ+5CV7incJJgIQKBgQDs9UgqhhGapmnDBa0K\nf5CcT9LtJ8Xxx6JhTD0yqKdzVUm5PHKGD6Q2HJ8Ph9GENN/KSVHKOKL8OdoGEFu0\n0JjiyW7G4+mKUYYXeg9Gw00CdhKtpa+S9uJrYNfZAcIMEky/Lm02hDn+iK5gzwcM\noQXHyBbar+aAt29QV/hybGGWoQKBgQDr6c+PHka8MmsPATUnNB/tx83UpDTrY/r6\nZ9er5MNPfdyVspCwiHkO534+RrheUKuCR5eQ7+yAhju2S8wK/fRBgViKHhLSjmmH\nCSNE6V16q3WUe2S9RGpcwIaLS5jg7HVCyp65eOCjnj9lOSTezy+qXM2CzUHtTmSs\nIOhfWsn6jwKBgQDkM3hTk5gikr9qFO5IHQAcuXdN867bIUJNZ8nMHsZc+Tct0HwO\nhcPEZR3+K/Pn2a/oNWIyWQcF14UTr+9RnE6QoiMwIdAI6Gg19dP+dxmUFDf6yYTk\nCSWW+cYF9H53d6w3tjNxfDgJ3IHrM5X7YJubgiQYaayYK5BlFMNtFtmI4QKBgQCb\nxuFKhNh6buRonQiHIZEvxu6wSdmz0WoprSYpmD4roFVm9+k42HTvlYa0Aqi9hpEp\nzrJTf0nwuDJ3tmc+nuCJ3KolUaRmKqmeBDeoylvyo4NZj30+yQ1ev7ZYBowlgZ4Q\ng5D5scrL37PG2EvzYGX+HZeKlpTA6THqwzQNuvqCGwKBgHgGHD+z/GJvlCeIC92i\nDFCor/4OZHHnuhV5TNsFwKrmSl6hduPAuMtS4IrvfhR/mfXWWvnl9gD+m3o/pQah\nEJYHgvoybRohKHuP+xOulTbrmaZX6gzCopTC5bYG8qUVr7HWsGVmHEBm2rmYxZua\n1chOR0IHmxzpJ4id2Km9dNgA\n-----END PRIVATE KEY-----\n",
    client_email: "google-sheets@sync-positive.iam.gserviceaccount.com",
    client_id: "113464503933360321411",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/google-sheets%40sync-positive.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
};

const getAuth = () => {
    const auth = new GoogleAuth({
        credentials,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    return auth;
};

export const addConnectDetails = async (email: string, name: string, subject: string, message: string): Promise<boolean> => {
    const sheets = google.sheets({ version: "v4", auth: getAuth() });

    if (!isEmailValid(email)) {
        console.error("Invalid email address:", email);
        return false;
    }
    const promise = new Promise<boolean>((resolve, reject) => {
        sheets.spreadsheets.values.append(
            {
                spreadsheetId: "1WDdxo3tPWHu5xP0C0QILIxwZBS-eeaYZH-pqHN-GE4Q",
                range: "ContactUs!A:A",
                valueInputOption: "RAW",
                requestBody: {
                    values: [[name, email, subject, message, formatDateTime(dayjs())]],
                },
            },
            (err, result) => {
                if (err) {
                    console.error("Error adding subscription:", err);
                    reject(false);
                    return;
                }
                console.log(`${result?.data.updates?.updatedCells} cells appended.`);
                resolve(true);
            },
        );
    });

    return await promise;
};

export const addSubscribtion = async (email: string, isStudentSubscription: boolean = false): Promise<boolean> => {
    const sheets = google.sheets({ version: "v4", auth: getAuth() });

    if (!isEmailValid(email)) {
        console.error("Invalid email address:", email);
        return false;
    }

    const promise = new Promise<boolean>((resolve, reject) => {
        sheets.spreadsheets.values.append(
            {
                spreadsheetId: "1WDdxo3tPWHu5xP0C0QILIxwZBS-eeaYZH-pqHN-GE4Q",
                range: isStudentSubscription ? "StudentSubscription!A:A" : "Subscription!A:A",
                valueInputOption: "RAW",
                requestBody: {
                    values: [[email, formatDateTime(dayjs())]],
                },
            },
            (err, result) => {
                if (err) {
                    console.error("Error adding subscription:", err);
                    reject(false);
                }
                console.log(`${result?.data.updates?.updatedCells} cells appended.`);
                resolve(true);
            },
        );
    });

    return await promise;
};

const emailRegex =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

function isEmailValid(email: string) {
    if (!email) return false;

    if (email.length > 254) return false;

    const valid = emailRegex.test(email);
    if (!valid) return false;

    // Further checking of some things regex can't handle
    const parts = email.split("@");
    if (parts[0].length > 64) return false;

    const domainParts = parts[1].split(".");
    if (
        domainParts.some(function (part: string) {
            return part.length > 63;
        })
    )
        return false;

    return true;
}
