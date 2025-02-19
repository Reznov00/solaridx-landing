import { Atom, useAtom } from "jotai";
import { atomWithMutation, AtomWithMutationResult } from "jotai-tanstack-query";
import { axiosInstance, getWeatherDataURL } from "src/apis";
import { showToast } from "src/components";
import { MutationErrorInterface, WeatherDataRequestInterface } from "src/interfaces";


const useMutationService = <TData, TError, TVariables>(
    atom: Atom<AtomWithMutationResult<TData, TError, TVariables, unknown>>,
    onSuccess: (val: TData, formData: TVariables) => void,
) => {
    const [{ mutateAsync, isPending, data }] = useAtom(atom);

    const handleService = async (formData: TVariables): Promise<TData> => {
        try {
            const result = await mutateAsync(formData, {
                onSuccess: (val) => onSuccess(val, formData),
                onError: (error: TError) => {
                    const err = error as MutationErrorInterface;
                    showToast('error', err?.message ?? 'Error Encountered');
                },
            });
            return result;
        } catch (error) {
            console.error('Mutation failed:', error);
            throw error;
        }
    };

    return { handleService, isPending, data };
};

const getWeatherDataMutation = atomWithMutation(() => ({
    mutationKey: ['getWeatherDataMutation'],
    mutationFn: async (values: WeatherDataRequestInterface) => {
        const { data } = await axiosInstance.get(
            getWeatherDataURL(
                values.lat,
                values.long,
                values.date.toISOString(),
                values.systemSize ?? 1
            )
        );

        return data;
    },
}));

export const usePostChatSesrvice = () => {

    return useMutationService(getWeatherDataMutation, (val, _) => {
        return val
    });
};