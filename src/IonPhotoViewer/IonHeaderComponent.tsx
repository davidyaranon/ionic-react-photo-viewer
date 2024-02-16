import React from "react";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonToolbar,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";

const IonHeaderComponent: React.FC<{ title: string, icon?: string | undefined }> = ({ title, icon }) => (
  <IonHeader class="header-no-shadow">
    <IonToolbar>
      <IonButtons slot="start">
        <IonButton style={{ fontSize: '1.15em', marginRight: '15px' }} id="ion-header-close-button">
          <IonIcon slot="icon-only" icon={icon ?? arrowBack} />
        </IonButton>
        <p style={{ fontSize: "1.25rem" }}>{title}</p>
      </IonButtons>
    </IonToolbar>
  </IonHeader>
);
export default IonHeaderComponent;
