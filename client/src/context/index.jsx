import { React, useContext, createContext } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react'

import { ethers } from 'ethers'

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract(import.meta.env.VITE_CONTRACT_ADD)

    const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign')

    const address = useAddress();
    const connect = useMetamask();


    const publishCampaign = async (form) => {
        try {
            const data = await createCampaign({
                args: [
                    address,
                    form.title,
                    form.description,
                    form.target,
                    new Date(form.deadline).getTime(),
                    form.image,
                ],
            })

            console.log("Contract call success", data);
        } catch (error) {
            console.log("Contract call failure", error);
        }
    }

    const getCampaigns = async () => {
        const campaigns = await contract.call('getCampaigns');

        const parsedCampaigns = campaigns.map((campaign, i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.utils.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
            image: campaign.image,
            pId: i
        }))

        return parsedCampaigns;
    }

    const getUserCampaigns = async () => {
        const allCampaigns = await getCampaigns();

        const filteredCampaigns = allCampaigns.filter((campaign) =>
            campaign.owner === address);

        return filteredCampaigns
    }

    const donate = async (pId, amount) => {
        const data = await contract.call('donateCampaign', [pId], { value: ethers.utils.parseEther(amount) })
        return data;
    }

    const getDontations = async (pId) => {
        const donations = await contract.call('getDonators', [pId]);
        const numberOfDonations = donations[0].length;

        const parsedDontations = [];

        for (let i = 0; i < numberOfDonations; i++) {
            parsedDontations.push({
                donator: donations[0][i],
                donation: ethers.utils.formatEther(donations[1][i].toString())
            })
        }

        return parsedDontations
    }

    return (
        <StateContext.Provider
            value={{
                address,
                contract,
                connect,
                createCampaign: publishCampaign,
                getCampaigns,
                getUserCampaigns,
                donate,
                getDontations
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);