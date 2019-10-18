import React from 'react'

const provider ={

    getHoroscope(sign) {
        switch(sign){
            case 'aries' :
                return "Friendship is the theme of the day. You can meet up with old friends or may be suddenly visited by one of them. You are also going to help one or more of your friends out of a tight spot today. On the other hand, a friend may come down hard on you, but you should not feel bad. He or she is unloading on you because he / she have her / his own problems and that is why he is reacting like this.";
            case 'cancer' :
                return "Today you are determined to play the power game which may include fair and unfair means to achieve your goals. After getting cornered for a long time, a spurt of energy from the planets now may fill you with confidence. You may make decisions on the basis of your instincts and rest assured, none will laugh on your face."
            case 'taurus' :
                return "If there is tension persisting in your relationship with someone, you may want to find a way out today. Listen to the other part of the story. Do not be too submissive allowing other to steamroller over you. But at the same time do not be blunt. You may find an important client at your office. Be agile and proactive."
            case 'gemini' :
                return "Someone around you will try to involve you in a needless power struggle. The key here is to keep an open mind and a calm demeanour so that you do not end up playing someone elseﾒs power games and getting involved in complications. If you keep an eye out, you can easily avoid this and have a perfectly nice and worry free day."
            case 'leo' :
                return "You have devoted considerable time and effort to a project and it will start to pay off now. Hard work and determination along with farsighted planning has done the trick. You have also been planning some renovations but have been deterred by financial constraints. Today you will come up with creative ways to accomplish all these tasks within your means."
            case 'virgo':
                return "You may make new friends today and embark upon new excavations! Keep on believing in yourself as you have been doing always. This will help you to reach every goal you are passionate about. Ideal time to make plans for the future; however limit yourself when it comes to finances. Spend where required only!";
            case 'libra':
                return "You are blessed with an amazingly clear vision today and you will be able to weigh long term benefits of your actions correctly. Hence, today is a good time to judge new ventures and investments which have come your way so that you can arrive at an objective decision. You will also be able to judge the persons near to you and identify who is your genuine well wisher."
            case 'scorpio' :
                return "You are feeling creative and ready to get a number of things done. However, a very real fear of what others will think and say may be holding you back. You need to realize that the right attitude is actually half the battle won. Paradoxically, though you feel creative and energetic, your self confidence is actually at a low level."
            case 'sagittarius ' :
                return "There will be certain sudden changes in your personal and professional life. This will leave you worried and insecure. Do not feel so and relax yourself! Just go with the flow as these changes are for your own good only. The situation may get worse when there will be some one to cause you some unhappiness by trying to avenge on you."
            case 'capricorn' :
                return "Today is going to be a fun fare day. You will be revisited by friends and relatives. Least you can expect a call or mail from them. It is a good time to brush up your social skills and be prepared for the upcoming parties. Your financial issues will be taken care of as the day progresses."
            case 'aquarius' :
                return "You seem a little confused today. You are also impatient to carry on an important task. It is advisable to wait and not to carry any important negotiation today. Confusion will gradually subside by day end. The day will pass on without any hiccups. You may travel today. Public transport may be a little late. Keep other options in hand."
            case 'pisces':
                return "You are likely to come across an unlikely experience today. It is not necessarily unpleasant, but it is likely to rattle you. It can bring about a radical change in your outlook. Do not be afraid to express your feelings, but this time is more suitable to put the emotional demands of the others ahead of those of your own.";
            
        }
    }

    
}

export default provider;