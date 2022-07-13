<template>
    <div class="session-wrapper">
        <Snackbar/>
        <div class="session-right text-center ml-0">
            <div class="session-table-cell">
                <div class="session-content">
                    <h2 class="mb-3">Welcome</h2>
                    <!-- <h2 class="mb-3">{{$t('message.loginToAdmin')}} {{getAppInfo('brand_name')}}</h2> -->
                    <p
                        class="fs-14"
                    >{{$t('message.enterUsernameAndPasswordToAccessControlPanelOf')}} {{getAppInfo('brand_name')}}.</p>
                    <v-form v-on:submit.prevent="submit" v-model="valid" class="mb-4">
                        <v-text-field
                            label="E-mail ID"
                            v-model="email"
                            :rules="emailRules"
                            autocomplete="on"
                            required
                            @keyup.enter="$refs.password.focus"
                        />
                        <v-text-field
                            label="Password"
                            v-model="password"
                            type="password"
                            :rules="passwordRules"
                            required
                            ref="password"
                            @keyup.enter="submit"
                        />
                        <v-checkbox color="primary" label="Remember me" v-model="checkbox"/>
                        <router-link
                            class="mb-1"
                            to="/session/forgot-password"
                        >{{$t('message.forgotPassword')}}?
                        </router-link>
                        <div>
                            <v-btn
                                large
                                class="mb-2"
                                @click="submit"
                                block
                                color="primary"
                                :disabled="!valid"
                            >{{$t('message.loginNow')}}
                            </v-btn>
                            <v-btn
                                large
                                @click="onCreateAccount"
                                block
                                color="warning"
                            >{{$t('message.createAccount')}}
                            </v-btn>
                        </div>
                        <p>{{$t('message.bySigningUpYouAgreeTo')}} {{getAppInfo('brand_name')}}</p>
                        <a href="#" @click.stop="tncdialog=true" class="font-weight-bold">
                            {{tnc_header}}
                        </a>
                    </v-form>
                </div>
            </div>
        </div>
        <v-dialog
            v-model="tncdialog" scrollable
            max-width="500"
        >
            <v-card>
                <v-card-title
                    class="headline grey lighten-2"
                    primary-title
                >
                    {{tnc_header}}
                </v-card-title>

                <v-card-text v-html="tnc_content"/>
            </v-card>
        </v-dialog>

    </div>
</template>