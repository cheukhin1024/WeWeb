"use strict";(self["webpackChunkweweb_front"]=self["webpackChunkweweb_front"]||[]).push([[693],{8693:(t,e,i)=>{i.r(e),i.d(e,{default:()=>p});var a=i(641),n=i(33);const s={class:"weweb-auth-settings-edit__invitation ww-typo-sub-text mb-2"},l=["innerHTML"],o={class:"weweb-auth-settings-edit__invitation ww-typo-sub-text mb-2"},c=["innerHTML"];function r(t,e,i,r,w,u){const b=(0,a.g2)("wwEditorFormRow");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(b,{label:"Invitation email"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",s,(0,n.v_)(u.emailInvitationSubject),1),(0,a.Lk)("div",{class:"weweb-auth-settings-edit__invitation ww-typo-caption mb-1",innerHTML:u.emailInvitationMessage},null,8,l),e[0]||(e[0]=(0,a.Lk)("div",{class:"ww-typo-link mb-2 weweb-auth-settings-edit__description"},[(0,a.eW)(" If you want to change the invitation email template "),(0,a.Lk)("a",{class:"ww-editor-link",href:"https://support.weweb.io/ticket/new/",target:"_blank"},"contact us"),(0,a.eW)(". ")],-1))])),_:1}),(0,a.bF)(b,{label:"Verification code email"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",o,(0,n.v_)(u.emailVerificationSubject),1),(0,a.Lk)("div",{class:"weweb-auth-settings-edit__invitation ww-typo-caption mb-1",innerHTML:u.emailVerificationMessage},null,8,c),e[1]||(e[1]=(0,a.Lk)("div",{class:"ww-typo-link mb-2 weweb-auth-settings-edit__description"},[(0,a.eW)(" If you want to change the verification code email template "),(0,a.Lk)("a",{class:"ww-editor-link",href:"https://support.weweb.io/ticket/new/",target:"_blank"},"contact us"),(0,a.eW)(". ")],-1))])),_:1})],64)}const w={props:{settings:{type:Object,required:!0}},emits:["update:settings"],computed:{emailInvitationSubject(){return this.settings.publicData.invitationEmail.EmailSubject},emailInvitationMessage(){return this.settings.publicData.invitationEmail.EmailMessage.replace("{username}","{email}").replace("{####}","{password}")},emailVerificationSubject(){return this.settings.publicData.verificationEmail.EmailSubject},emailVerificationMessage(){return this.settings.publicData.verificationEmail.EmailMessage.replace("{####}","{code}")}}};var u=i(6262);const b=(0,u.A)(w,[["render",r],["__scopeId","data-v-6f1e6776"]]),p=b}}]);