import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { BackButton, FullScreenView, PrimaryButton, TextInput, TextMedium, TextRegular } from 'src/components'
import { spectaclesConnectSchema } from 'src/constants'
import { useSpecsLinkService, useSpecsUnLinkService } from 'src/services'
import { useUserAtom } from 'src/store'
import { Colors, FontSizes, LineHeight } from 'src/themes'
import { dissmissKeyBoard, isIOS } from 'src/utilities'
import { AgreementForm } from './AgreementForm'

const SpectaclesManageScreen = () => {
    const { user } = useUserAtom()
    const [agreementView, setAgreementView] = useState(!user?.specsId)
    const { handleService: linkService, isPending: isLinking } = useSpecsLinkService();
    const { handleService: unlinkService, isPending: isUnlinking } = useSpecsUnLinkService();
    const isPending = isLinking || isUnlinking
    const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        resolver: yupResolver(spectaclesConnectSchema),
    });


    const handleConnect = data => {
        linkService({
            username: data.username,
            unique_code: data.unique_code,
        })
        reset()
    };



    return (
        <FullScreenView>
            {(!agreementView || user?.specsId) ?
                <TouchableWithoutFeedback onPress={dissmissKeyBoard}>
                    <View style={styles.container}>
                        <View style={styles.headerContainer}>
                            <BackButton iconSize={2} style={{ padding: RFValue(7) }} />
                            <TextMedium fontSize='sh2' numberOfLines={1}>
                                {'Connect with Spectacles'}
                            </TextMedium>
                        </View>
                        <View style={styles.subContainer}>
                            <TextInput
                                control={control}
                                name="username"
                                label={'Spectacles username'}
                                placeholder='johndoe'
                                editable={!isPending && !user?.specsId}
                                maxLength={30}
                                touched={!!errors?.username?.message}
                                error={errors?.username?.message}
                                autoCapitalize='none'
                            />
                            <TextInput
                                control={control}
                                name="unique_code"
                                label={'Unqiue Code'}
                                placeholder='XXXX'
                                editable={!isPending && !user?.specsId}
                                keyboardType='number-pad'
                                maxLength={4}
                                touched={!!errors.unique_code?.message}
                                error={errors?.unique_code?.message}
                            />
                            <PrimaryButton
                                title="Connect"
                                buttonStyle={{ marginVertical: 0 }}
                                onPress={handleSubmit(handleConnect)}
                                disabled={isPending || !!user?.specsId}
                                loading={isPending && !user?.specsId}
                            />
                            {user?.specsId &&
                                <View style={styles.unlinkContainer}>
                                    <TextRegular style={styles.subTextStyle}>
                                        You already have a spectacles account linked. Unlink first to link a new account.
                                    </TextRegular>
                                    <PrimaryButton
                                        buttonStyle={{ backgroundColor: Colors.danger, borderWidth: 0, marginVertical: 0 }}
                                        textStyle={{ color: Colors.white }}
                                        onPress={unlinkService}
                                        title="Unlink"
                                        shadowEnabled={false}
                                        loading={isPending}
                                    /></View>}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                : <AgreementForm handlePress={() => setAgreementView(false)} />
            }
        </FullScreenView>
    )
}

export { SpectaclesManageScreen }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: heightPercentageToDP(2),
        paddingHorizontal: widthPercentageToDP(5),
    },
    subContainer: {
        marginVertical: heightPercentageToDP(3)
    },
    unlinkContainer: {
        marginVertical: heightPercentageToDP(3),
        gap: heightPercentageToDP(1)
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: widthPercentageToDP(3),
        marginTop: heightPercentageToDP(isIOS ? 1 : 2)
    },
    subTextStyle: {
        fontSize: FontSizes.sxt,
        lineHeight: LineHeight.sxt,
        marginVertical: heightPercentageToDP(0.5)
    },
})